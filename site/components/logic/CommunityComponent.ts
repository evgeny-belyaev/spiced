import { FormsApi } from "../forms/formsApi"
import { Forms, MailChimp } from "../constants"
import { MailComponent } from "../mail"
import { Logger } from "../logger"
import { FormsUtils } from "../forms/formsUtils"
import { SpicedDatabase } from "../database/spicedDatabase"
import { BaseError } from "../baseError"
import { Community } from "../database/types"
import { UrlBuilder } from "../urlBuilder"

type CreateCommunityResult = {
    communityInvitationLink?: string,
    error?: BaseError
}

export class CommunityComponent {

    private log = new Logger("CommunityComponent")

    constructor (
        private formsApi: FormsApi,
        private mailComponent: MailComponent,
        private spicedDatabase: SpicedDatabase,
        private urlBuilder: UrlBuilder
    ) {
    }

    async sendJoinCommunityConfirmationEmail (formResponseId: string, email: string): Promise<void> {
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

    async sendCreateCommunityConfirmationEmail (formResponseId: string, email: string): Promise<void> {
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

    async findCommunityById (communityId: string): Promise<Community | null> {
        return await this.spicedDatabase.getCommunityById(communityId)
    }

    async createCommunity (formsResponseId: string): Promise<CreateCommunityResult> {
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

    async joinCommunity (communityId: string, formResponseId: string): Promise<Community | null> {
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



    optIn (communityId: string, userId: string, timeSpanId: string): string {
        return ""
    }
    /*

    calculateMatch(communityId: string, timeSpanId:string, matchs: string[]) {
        let alreadyMatched = []
        let match = []
        for(let userId in matchs) {
            const previouslyMatched = getPreviouslyMatchedFor(userId, communityId)

            const matchedUserId = matchs.exclude(previouslyMatched).exclude(alreadyMatched)[RandomId]

            alreadyMatched.push(userId)
            alreadyMatched.push(matchedUserId)

            match.push({
                first: userId,
                second: matchedUserId
            })
        }

        return match
    }

    matchCommunity(communityId: string, timeSpanId: string) {
        const optedInMembersIds = getListOfOptedInMembers(communityId, timeSpanId)

        const matchs = calculateMatch(communityId, timeSpanId, optedInMembersIds)

        saveMatch(communityId, timeSpanId, matchs)
    }

    match(timeSpanId: string) {
        const communities = getListOfOptedInCommunities(timeSpanId)

        for(let community in communities) {
            this.matchCommunity(community.communityId, timeSpanId)
        }
    }

     */
}