import { IFormsApi } from "../forms/formsApi"
import { Forms, MailChimp } from "../constants"
import { Logger } from "../logger"
import { FormsUtils } from "../forms/formsUtils"
import { SpicedDatabase } from "../database/spicedDatabase"
import { Community, Matches } from "../database/types"
import { UrlBuilder } from "../urlBuilder"
import { ICommunityComponent } from "./ICommunityComponent"
import { IMailComponent } from "../mail/IMailComponent"
import { IMatcher } from "./IMatcher"
import { templateField } from "../mail"
import { shuffleArray } from "../../api/utils"

export type CreateCommunityResult = {
    communityTitle: string,
    communityInvitationLink: string,
    alreadyExist?: boolean
}

export type JoinCommunityResult = {
    communityTitle: string,
    alreadyJoined?: boolean
}

export class CommunityComponent implements ICommunityComponent {

    private log = new Logger("CommunityComponent")

    constructor(
        private formsApi: IFormsApi,
        private mailComponent: IMailComponent,
        private spicedDatabase: SpicedDatabase,
        private urlBuilder: UrlBuilder,
        private matcher: IMatcher
    ) {
    }

    async sendJoinCommunityConfirmationEmail(formResponseId: string, email: string): Promise<void> {
        if (!formResponseId || !email) {
            throw Error("Invalid argument")
        }

        this.log.debug(`Getting response for form ${Forms.joinCommunity.formId}, formResponseId=${formResponseId}`)

        const item = await this.formsApi.getAnswers(
            Forms.joinCommunity.formId,
            formResponseId
        )
        const answers = item && item.answers ? item.answers : []
        const hidden = item && item.hidden ? item.hidden : {}

        this.log.debug("Form answers are", answers, hidden)

        const utils = new FormsUtils()

        const firstName = utils.getAnswerById(answers, Forms.joinCommunity.answers.memberFirstName)
        const communityId = hidden[Forms.joinCommunity.hiddenFields.communityId]

        if (!communityId) {
            throw Error("Invalid argument")
        }

        const community = await this.spicedDatabase.getCommunityById(communityId)

        if (!community) {
            throw Error("Invalid argument")
        }

        const url = this.urlBuilder.getJoinCommunityConfirmationUrl(communityId, formResponseId)
        const markup = `
            <td> <!--[if mso]>
                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                             xmlns:w="urn:schemas-microsoft-com:office:word"
                             href="${url}"
                             style="height:66px;v-text-anchor:middle;mso-wrap-style:none;mso-position-horizontal:center;"
                             arcsize="9%" stroke="f" fillcolor="#1f5bff">
                    <w:anchorlock/>
                    <center style="text-decoration: none; padding: 20px 42px; font-size: 19px; text-align: center; font-weight: bold; font-family:Helvetica Neue, Helvetica, Arial, sans-serif; width: 100%;color:#ffffff;">
                        Verify email address
                    </center>
                </v:roundrect> <![endif]--> <!--[if !mso]--> <a
                        style="display: table-cell; text-decoration: none; padding: 20px 42px; font-size: 19px; text-align: center; font-weight: bold; font-family:Helvetica Neue, Helvetica, Arial, sans-serif; width: 100%;color:#ffffff; border:0px solid ; background-color:#1f5bff; border-radius: 3px;"
                        href="${url}"> Verify email address </a> <!--[endif]-->
            </td>        
        `
        this.log.debug(`Sending join confirmation link with ${formResponseId} to ${email}`)

        const mailTemplate = MailChimp.Templates.joinCommunityConfirmation

        await this.mailComponent.sendTemplate(
            email,
            mailTemplate.subject(),
            MailChimp.from,
            mailTemplate.name,
            [
                {
                    name: mailTemplate.fields.communityTitle,
                    content: community.title
                },
                {
                    name: mailTemplate.fields.userFirstName,
                    content: utils.getText(firstName)
                },
                {
                    name: mailTemplate.fields.joinCommunityConfirmationUrl,
                    content: markup
                }])
    }

    async sendCreateCommunityConfirmationEmail(formResponseId: string, email: string): Promise<void> {
        if (!formResponseId || !email) {
            throw Error("Invalid argument")
        }

        const item = await this.formsApi.getAnswers(
            Forms.createCommunity.formId,
            formResponseId
        )
        const answers = item && item.answers ? item.answers : []

        const utils = new FormsUtils()
        const firstName = utils.getAnswerById(answers, Forms.createCommunity.answers.creatorFirstName)

        const url = this.urlBuilder.getCreateCommunityConfirmationUrl(formResponseId)
        const markup = `
            <td> <!--[if mso]>
                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                             xmlns:w="urn:schemas-microsoft-com:office:word"
                             href="${url}"
                             style="height:66px;v-text-anchor:middle;mso-wrap-style:none;mso-position-horizontal:center;"
                             arcsize="9%" stroke="f" fillcolor="#1f5bff">
                    <w:anchorlock/>
                    <center style="text-decoration: none; padding: 20px 42px; font-size: 19px; text-align: center; font-weight: bold; font-family:Helvetica Neue, Helvetica, Arial, sans-serif; width: 100%;color:#ffffff;">
                        Verify email address
                    </center>
                </v:roundrect> <![endif]--> <!--[if !mso]-->
                <a
                        style="display: table-cell; text-decoration: none; padding: 20px 42px; font-size: 19px; text-align: center; font-weight: bold; font-family:Helvetica Neue, Helvetica, Arial, sans-serif; width: 100%;color:#ffffff; border:0px solid ; background-color:#1f5bff; border-radius: 3px;"
                        href="${url}"> Verify email address </a> <!--[endif]-->
            </td>
        `

        this.log.debug(`Sending create community confirmation link with ${formResponseId} to ${email}`)

        const mailTemplate = MailChimp.Templates.createCommunityConfirmation

        await this.mailComponent.sendTemplate(
            email,
            mailTemplate.subject(),
            MailChimp.from,
            mailTemplate.name,
            [
                {
                    name: mailTemplate.fields.userFirstName,
                    content: utils.getText(firstName)
                },
                {
                    name: mailTemplate.fields.createCommunityConfirmationUrl,
                    content: markup
                }])
    }

    async findCommunityById(communityId: string): Promise<Community | null> {
        return await this.spicedDatabase.getCommunityById(communityId)
    }

    async createCommunity(formsResponseId: string): Promise<CreateCommunityResult> {
        const alreadyExistsId = await this.spicedDatabase.getCommunityIdByTypeFormResponseId(formsResponseId)

        if (alreadyExistsId) {
            const invitationLink = this.urlBuilder.getCommunityInvitationUrl(alreadyExistsId)
            const community = await this.spicedDatabase.getCommunityById(alreadyExistsId)

            if (!community) {
                throw new Error("Invalid argument")
            }

            return {
                communityTitle: community.title,
                communityInvitationLink: invitationLink,
                alreadyExist: true
            }
        } else {
            const item = await this.formsApi.getAnswers(
                Forms.createCommunity.formId,
                formsResponseId
            )

            const answers = item && item.answers ? item.answers : []

            this.log.debug("Form answers are", answers)

            const utils = new FormsUtils()

            const firstName = utils.getAnswerById(answers, Forms.createCommunity.answers.creatorFirstName)
            const lastName = utils.getAnswerById(answers, Forms.createCommunity.answers.creatorLastName)
            const communityTitle = utils.getAnswerById(answers, Forms.createCommunity.answers.communityTitle)
            const communityPublicLink = utils.getAnswerById(answers, Forms.createCommunity.answers.communityPublicLink)
            const creatorEmailAddress = utils.getAnswerById(answers, Forms.createCommunity.answers.creatorEmailAddress)
            const creatorPhoneNumber = utils.getAnswerById(answers, Forms.createCommunity.answers.creatorPhoneNumber)
            const creatorWebsite = utils.getAnswerById(answers, Forms.createCommunity.answers.creatorWebsite)

            const emailAddress = utils.getEmail(creatorEmailAddress)
            const title = utils.getText(communityTitle)

            const creatorFirstName = utils.getText(firstName)
            const userId = await this.spicedDatabase.createUser({
                firstName: creatorFirstName,
                lastName: utils.getText(lastName),
                emailAddress: emailAddress,
                phoneNumber: utils.getPhoneNumber(creatorPhoneNumber),
                website: utils.getUrl(creatorWebsite)
            })

            const communityId = await this.spicedDatabase.createCommunity({
                title: title,
                publicLink: utils.getUrl(communityPublicLink),
                typeFormResponseId: formsResponseId,
                creatorUserId: userId
            })

            await this.spicedDatabase.createMember(communityId, userId)

            const invitationLink = this.urlBuilder.getCommunityInvitationUrl(communityId)
            const invitationLinkMarkup = `<a href="${invitationLink}">${invitationLink}</a>`
            const mailTemplate = MailChimp.Templates.communityCreated

            await this.mailComponent.sendTemplate(
                emailAddress,
                mailTemplate.subject(),
                MailChimp.from,
                mailTemplate.name,
                [
                    {
                        name: mailTemplate.fields.userFirstName,
                        content: creatorFirstName
                    },
                    {
                        name: mailTemplate.fields.communityTitle,
                        content: title
                    },
                    {
                        name: mailTemplate.fields.communityInvitationLink,
                        content: invitationLinkMarkup
                    }
                ]
            )

            return {
                communityTitle: title,
                communityInvitationLink: invitationLink
            }
        }
    }

    async joinCommunity(communityId: string, formResponseId: string, utc: number): Promise<JoinCommunityResult> {
        const community = await this.spicedDatabase.getCommunityById(communityId)

        if (!community) {
            throw new Error("Invalid argument")
        }

        const item = await this.formsApi.getAnswers(Forms.joinCommunity.formId, formResponseId)
        const answers = item && item.answers ? item.answers : []

        const utils = new FormsUtils()

        const memberFirstName = utils.getAnswerById(answers, Forms.joinCommunity.answers.memberFirstName)
        const memberLastName = utils.getAnswerById(answers, Forms.joinCommunity.answers.memberLastName)
        const memberEmailAddress = utils.getAnswerById(answers, Forms.joinCommunity.answers.memberEmailAddress)
        const memberPhoneNumber = utils.getAnswerById(answers, Forms.joinCommunity.answers.memberPhoneNumber)
        const memberWebsite = utils.getAnswerById(answers, Forms.joinCommunity.answers.memberWebsite)

        const emailAddress = utils.getEmail(memberEmailAddress)

        if (await this.hasAlreadyJoined(emailAddress, communityId)) {
            return {
                communityTitle: community.title,
                alreadyJoined: true
            }
        } else {
            const userFirstName = utils.getText(memberFirstName)

            const userId = await this.spicedDatabase.createUser({
                firstName: userFirstName,
                lastName: utils.getText(memberLastName),
                phoneNumber: utils.getPhoneNumber(memberPhoneNumber),
                website: utils.getUrl(memberWebsite),
                emailAddress: emailAddress
            })

            await this.spicedDatabase.createMember(communityId, userId)

            const nextTimeSpanId = this.matcher.getNextTimeSpanId(utc).toString()
            await this.optIn(nextTimeSpanId, communityId, userId, true)

            const mailTemplate = MailChimp.Templates.communityJoined
            await this.mailComponent.sendTemplate(
                emailAddress,
                mailTemplate.subject(community.title),
                MailChimp.from,
                mailTemplate.name,
                [
                    {
                        name: mailTemplate.fields.userFirstName,
                        content: userFirstName
                    },
                    {
                        name: mailTemplate.fields.communityTitle,
                        content: community.title
                    }
                ]
            )

            return {
                communityTitle: community.title
            }
        }
    }

    private async hasAlreadyJoined(email: string, communityId: string): Promise<boolean> {
        const members = await this.spicedDatabase.getMembers(communityId)
        const membersIds = members ? Object.keys(members) : []
        const userId = this.spicedDatabase.getUserId(email)

        return membersIds.includes(userId)
    }

    private async sendMatchEmails(communityId: string, timeSpanId: string): Promise<void> {
        this.log.debug(`Going to send match mails for communityId=${communityId} for timeSpanId=${timeSpanId}`)

        const matches = await this.spicedDatabase.getMatches(communityId, timeSpanId)
        const community = await this.spicedDatabase.getCommunityById(communityId)

        if (!community) {
            throw new Error("Invalid argument")
        }

        const usersIds = matches ? Object.keys(matches) : []
        const mailTemplateMatched = MailChimp.Templates.matched
        const mailTemplateNoMatch = MailChimp.Templates.noMatch

        for (const userId of usersIds) {
            const match = matches[userId]

            this.log.debug(JSON.stringify({ matches, match }))

            if (!match) {
                continue
            }

            const user = await this.spicedDatabase.getUserById(userId)

            if (!user) {
                continue
            }

            if (match.matchedUserId) {
                const matchedUser = await this.spicedDatabase.getUserById(match.matchedUserId)

                this.log.debug(JSON.stringify({ user, matchedUser }))

                if (!matchedUser) {
                    continue
                }

                await this.mailComponent.sendTemplate(
                    user.emailAddress,
                    mailTemplateMatched.subject(community.title),
                    MailChimp.from,
                    mailTemplateMatched.name,
                    [
                        templateField(mailTemplateMatched.fields.userFirstName, user.firstName),
                        templateField(mailTemplateMatched.fields.matchedUserEmail, matchedUser.emailAddress),
                        templateField(mailTemplateMatched.fields.matchedUserPhone, matchedUser.phoneNumber),
                        templateField(mailTemplateMatched.fields.matchedUserFirstName, matchedUser.firstName),
                        templateField(mailTemplateMatched.fields.matchedUserLastName, matchedUser.lastName),
                        templateField(mailTemplateMatched.fields.matchedUserProfileUrl, matchedUser.website),
                        templateField(mailTemplateMatched.fields.communityTitle, community.title)
                    ]
                )
            } else {
                const invitationLink = this.urlBuilder.getCommunityInvitationUrl(communityId)
                const invitationLinkMarkup = `<a href="${invitationLink}">${invitationLink}</a>`

                await this.mailComponent.sendTemplate(
                    user.emailAddress,
                    mailTemplateNoMatch.subject(community.title),
                    MailChimp.from,
                    mailTemplateNoMatch.name,
                    [
                        templateField(mailTemplateNoMatch.fields.userFirstName, user.firstName),
                        templateField(mailTemplateNoMatch.fields.communityInvitationLink, invitationLinkMarkup),
                        templateField(mailTemplateNoMatch.fields.communityTitle, community.title)
                    ]
                )
            }
        }
    }

    async monday(timeSpanId: string, singleCommunityId = ""): Promise<NodeJS.Dict<Matches>> {
        const optedInCommunitiesIds = await this.spicedDatabase.getOptedInCommunities(timeSpanId)
        const ids = optedInCommunitiesIds ? Object.keys(optedInCommunitiesIds) : []
        const result: NodeJS.Dict<Matches> = {}

        this.log.debug(optedInCommunitiesIds)

        for (const communityId of ids) {
            if (singleCommunityId && singleCommunityId !== communityId) {
                continue
            }

            const optedInAnswers = await this.spicedDatabase.getOptedInUsers(timeSpanId, communityId)
            if (!optedInAnswers) {
                continue
            }

            const keys = Object.keys(optedInAnswers)
            // Get members who answered "yes"
            const applicantsIds = keys.filter((userId) => optedInAnswers[userId] === true)

            const matches = await this.matcher.calculateMatch(communityId, timeSpanId,
                shuffleArray(applicantsIds)
            )

            await this.matcher.saveMatches(matches, communityId, timeSpanId)
            await this.sendMatchEmails(communityId, timeSpanId)

            result[communityId] = matches
        }

        return result
    }

    async sendOptInRequest(timeSpanId: string, singleCommunityId = ""): Promise<string> {
        const allCommunitiesIds = await this.spicedDatabase.getCommunitiesIds()
        const ids = allCommunitiesIds ? Object.keys(allCommunitiesIds) : []
        const mailTemplate = MailChimp.Templates.optIn

        for (const communityId of ids) {
            if (singleCommunityId && singleCommunityId !== communityId) {
                continue
            }

            const community = await this.spicedDatabase.getCommunityById(communityId)
            if (!community) {
                throw new Error("Invalid argument")
            }

            this.log.debug(`Sending optin request for ${communityId}`)

            const members = await this.spicedDatabase.getMembers(communityId)
            const membersIds = members ? Object.keys(members) : []

            for (const memberId of membersIds) {
                const user = await this.spicedDatabase.getUserById(memberId)

                if (!user) {
                    continue
                }

                const yesUrl = this.urlBuilder.getOptInConfirmationUrl(communityId, timeSpanId, memberId, true)
                const noUrl = this.urlBuilder.getOptInConfirmationUrl(communityId, timeSpanId, memberId, false)

                const yesMarkup = `
                    <td> <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                                 xmlns:w="urn:schemas-microsoft-com:office:word"
                                 href="${yesUrl}"
                                 style="height:66px;v-text-anchor:middle;mso-wrap-style:none;mso-position-horizontal:center;"
                                 arcsize="9%" stroke="f" fillcolor="#1f5bff">
                        <w:anchorlock/>
                        <center style="text-decoration: none; padding: 20px 42px; font-size: 19px; text-align: center; font-weight: bold; font-family:Helvetica Neue, Helvetica, Arial, sans-serif; width: 100%;color:#ffffff;">
                            Yes, I'm in!
                        </center>
                    </v:roundrect> <![endif]--> <!--[if !mso]--> <a
                            style="display: table-cell; text-decoration: none; padding: 20px 42px; font-size: 19px; text-align: center; font-weight: bold; font-family:Helvetica Neue, Helvetica, Arial, sans-serif; width: 100%;color:#ffffff; border:0px solid ; background-color:#1f5bff; border-radius: 3px;"
                            href="${yesUrl}"> Yes, I'm in! </a> <!--[endif]--> </td>                
                `
                const noMarkup = `
                <a href="${noUrl}" style="">Pause all notification for 1 week</a>
                `

                this.log.debug(`Sending optin request for ${communityId} to ${user.emailAddress}`)

                await this.mailComponent.sendTemplate(
                    user.emailAddress,
                    mailTemplate.subject(community.title),
                    MailChimp.from,
                    mailTemplate.name,
                    [
                        {
                            name: mailTemplate.fields.userFirstName,
                            content: user.firstName
                        },
                        {
                            name: mailTemplate.fields.communityTitle,
                            content: community.title
                        },
                        {
                            name: mailTemplate.fields.yesUrl,
                            content: yesMarkup
                        },
                        {
                            name: mailTemplate.fields.noUrl,
                            content: noMarkup
                        }
                    ]
                )
            }
        }

        return timeSpanId
    }

    async optIn(timeSpanId: string, communityId: string, userId: string, optIn: boolean): Promise<void> {
        await this.spicedDatabase.setOptIn(communityId, userId, timeSpanId, optIn)
    }
}