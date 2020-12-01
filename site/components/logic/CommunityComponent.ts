import { IFormsApi } from "../forms/formsApi"
import { Forms, MailChimp } from "../constants"
import { Logger } from "../logger"
import { FormsUtils } from "../forms/formsUtils"
import { SpicedDatabase } from "../database/spicedDatabase"
import { BaseError } from "../baseError"
import { Community, Matches } from "../database/types"
import { UrlBuilder } from "../urlBuilder"
import { shuffleArray } from "../../api/utils"
import { ICommunityComponent } from "./ICommunityComponent"
import { IMailComponent } from "../mail/IMailComponent"
import { IMatcher } from "./IMatcher"

export type CreateCommunityResult = {
    communityInvitationLink?: string,
    error?: BaseError
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

        const response = await this.formsApi.getResponse(Forms.joinCommunity.formId, formResponseId)

        this.log.debug("Response: " + JSON.stringify(response))

        const communityId =
            response && response.items && response.items.length ?
                response.items[0].hidden[Forms.joinCommunity.hiddenFields.communityId] : undefined

        if (!communityId) {
            throw Error("Invalid argument")
        }

        const url = this.urlBuilder.getJoinCommunityConfirmationUrl(communityId, formResponseId)
        const content = `<a href="${url}">Click me</a>`
        this.log.debug(`Sending join confirmation link with ${formResponseId} to ${email} content is ${content}`)

        const mailTemplate = MailChimp.Templates.joinCommunityConfirmation

        await this.mailComponent.sendTemplate(
            email,
            "Wow! Follow the link to join!",
            MailChimp.from,
            mailTemplate.name,
            [{
                name: mailTemplate.fields.joinCommunityConfirmationUrl,
                content
            }])
    }

    async sendCreateCommunityConfirmationEmail(formResponseId: string, email: string): Promise<void> {
        if (!formResponseId || !email) {
            throw Error("Invalid argument")
        }

        const url = this.urlBuilder.getCreateCommunityConfirmationUrl(formResponseId)
        const content = `<a href="${url}">Click me</a>`

        this.log.debug(`Sending create community confirmation link with ${formResponseId} to ${email} content is ${content}`)

        const mailTemplate = MailChimp.Templates.createCommunityConfirmation

        await this.mailComponent.sendTemplate(
            email,
            "Community creation confirmation",
            MailChimp.from,
            mailTemplate.name,
            [{
                name: mailTemplate.fields.createCommunityConfirmationUrl,
                content
            }])
    }

    async findCommunityById(communityId: string): Promise<Community | null> {
        return await this.spicedDatabase.getCommunityById(communityId)
    }

    async createCommunity(formsResponseId: string): Promise<CreateCommunityResult> {
        const answers = await this.formsApi.getAnswers(
            Forms.createCommunity.formId,
            formsResponseId
        )

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

        const userId = await this.spicedDatabase.createUser({
            firstName: utils.getText(firstName),
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
            "Community created",
            MailChimp.from,
            mailTemplate.name,
            [
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
            communityInvitationLink: invitationLink
        }
    }

    async joinCommunity(communityId: string, formResponseId: string): Promise<Community | null> {
        const community = await this.spicedDatabase.getCommunityById(communityId)

        if (!community) {
            throw new Error("Invalid argument")
        }

        const answers = await this.formsApi.getAnswers(Forms.joinCommunity.formId, formResponseId)

        const utils = new FormsUtils()

        const memberFirstName = utils.getAnswerById(answers, Forms.joinCommunity.answers.memberFirstName)
        const memberLastName = utils.getAnswerById(answers, Forms.joinCommunity.answers.memberLastName)
        const memberEmailAddress = utils.getAnswerById(answers, Forms.joinCommunity.answers.memberEmailAddress)
        const memberPhoneNumber = utils.getAnswerById(answers, Forms.joinCommunity.answers.memberPhoneNumber)
        const memberWebsite = utils.getAnswerById(answers, Forms.joinCommunity.answers.memberWebsite)

        const emailAddress = utils.getEmail(memberEmailAddress)

        const userId = await this.spicedDatabase.createUser({
            firstName: utils.getText(memberFirstName),
            lastName: utils.getText(memberLastName),
            phoneNumber: utils.getPhoneNumber(memberPhoneNumber),
            website: utils.getUrl(memberWebsite),
            emailAddress: emailAddress
        })

        await this.spicedDatabase.createMember(communityId, userId)

        const mailTemplate = MailChimp.Templates.communityJoined
        await this.mailComponent.sendTemplate(
            emailAddress,
            "You've successfully joined",
            MailChimp.from,
            mailTemplate.name,
            [
                {
                    name: mailTemplate.fields.communityTitle,
                    content: community.title
                }
            ]
        )

        return community
    }

    private async sendMatchEmails(communityId: string, timeSpanId: string): Promise<void> {
        this.log.debug(`Going to send match mails for communityId=${communityId} for timeSpanId=${timeSpanId}`)

        const matches = await this.spicedDatabase.getMatches(communityId, timeSpanId)
        const community = await this.spicedDatabase.getCommunityById(communityId)

        if (!community) {
            throw new Error("Invalid argument")
        }

        const usersIds = matches ? Object.keys(matches) : []
        const mailTemplate = MailChimp.Templates.matched

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
                    `Wow! You've matched in ${community.title}!`,
                    MailChimp.from,
                    mailTemplate.name,
                    [
                        {
                            name: mailTemplate.fields.matchedUserName,
                            content: matchedUser.firstName + " " + matchedUser.lastName
                        },
                        {
                            name: mailTemplate.fields.matchedUserEmail,
                            content: matchedUser.emailAddress
                        },
                        {
                            name: mailTemplate.fields.matchedUserPhone,
                            content: matchedUser.phoneNumber
                        },
                        {
                            name: mailTemplate.fields.communityTitle,
                            content: community.title
                        }
                    ]
                )
            } else {
                await this.mailComponent.sendTemplate(
                    user.emailAddress,
                    `Wow! You've matched in ${community.title}!`,
                    MailChimp.from,
                    mailTemplate.name,
                    [
                        {
                            name: mailTemplate.fields.matchedUserName,
                            content: "We cant find match for you =("
                        },
                        {
                            name: mailTemplate.fields.matchedUserEmail,
                            content: ""
                        },
                        {
                            name: mailTemplate.fields.matchedUserPhone,
                            content: ""
                        },
                        {
                            name: mailTemplate.fields.communityTitle,
                            content: community.title
                        }
                    ]
                )
            }
        }
    }

    async monday(timeSpanId: string): Promise<NodeJS.Dict<Matches>> {
        const optedInCommunitiesIds = await this.spicedDatabase.getOptedInCommunities(timeSpanId)
        const ids = optedInCommunitiesIds ? Object.keys(optedInCommunitiesIds) : []
        const result: NodeJS.Dict<Matches> = {}

        this.log.debug(optedInCommunitiesIds)

        for (const communityId of ids) {
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

    async sendOptInRequest(now: Date): Promise<string> {
        const allCommunitiesIds = await this.spicedDatabase.getCommunitiesIds()
        const ids = allCommunitiesIds ? Object.keys(allCommunitiesIds) : []
        const mailTemplate = MailChimp.Templates.optIn
        const timeSpanId = this.matcher.getNextTimeSpanId(now.getTime()).toString()

        for (const communityId of ids) {
            const community = await this.spicedDatabase.getCommunityById(communityId)
            if (!community) {
                throw new Error("Invalid argument")
            }

            const members = await this.spicedDatabase.getMembers(communityId)
            const membersIds = members ? Object.keys(members) : []

            for (const memberId of membersIds) {
                const user = await this.spicedDatabase.getUserById(memberId)

                if (!user) {
                    continue
                }

                const yesUrl = this.urlBuilder.getOptInConfirmationUrl(communityId, timeSpanId, memberId, true)
                const noUrl = this.urlBuilder.getOptInConfirmationUrl(communityId, timeSpanId, memberId, false)

                await this.mailComponent.sendTemplate(
                    user.emailAddress,
                    `Would you like to match next week in ${community.title}?`,
                    MailChimp.from,
                    mailTemplate.name,
                    [
                        {
                            name: mailTemplate.fields.communityTitle,
                            content: community.title
                        },
                        {
                            name: mailTemplate.fields.yesUrl,
                            content: yesUrl
                        },
                        {
                            name: mailTemplate.fields.noUrl,
                            content: noUrl
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