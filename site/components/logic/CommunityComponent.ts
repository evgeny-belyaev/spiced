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

    async sendJoinCommunityConfirmationEmail (formResponseId: string, email: string, communityKey: string): Promise<void> {
        if (!formResponseId || !email || !communityKey) {
            throw Error("Invalid argument")
        }

        const url = this.urlBuilder.getJoinCommunityConfirmationUrl(communityKey, email)
        const content = `<a href="${url}">Click me</a>`
        this.log.debug(`Sending join confirmation link with ${formResponseId} to ${email} content is ${content}`)

        const mailTemplate = MailChimp.Templates.joinCommunityConfirmation

        await this.mailComponent.sendTemplate(
            email,
            "Community creation confirmation",
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

    async findCommunityByCommunityKey (communityKey: string): Promise<Community | null> {
        return await this.spicedDatabase.getCommunityById(communityKey)
    }

    async createCommunity (formsResponseId: string): Promise<CreateCommunityResult> {
        const answers = await this.formsApi.getAnswers(
            Forms.createCommunity.formId,
            formsResponseId
        )

        this.log.debug("Form answers are", answers)

        const utils = new FormsUtils()

        const firstName = utils.getAnswerById(answers, Forms.createCommunity.answers.firstName)
        const lastName = utils.getAnswerById(answers, Forms.createCommunity.answers.lastName)
        const communityTitle = utils.getAnswerById(answers, Forms.createCommunity.answers.communityTitle)
        const communityPublicLink = utils.getAnswerById(answers, Forms.createCommunity.answers.communityPublicLink)
        const creatorEmailAddress = utils.getAnswerById(answers, Forms.createCommunity.answers.creatorEmailAddress)
        const creatorPhoneNumber = utils.getAnswerById(answers, Forms.createCommunity.answers.creatorPhoneNumber)
        const creatorWebsite = utils.getAnswerById(answers, Forms.createCommunity.answers.creatorWebsite)

        const emailAddress = utils.getEmail(creatorEmailAddress)
        const title = utils.getText(communityTitle)

        const communityKey = await this.spicedDatabase.createCommunity({
            title: title,
            publicLink: utils.getUrl(communityPublicLink),
            typeFormResponseId: formsResponseId,
            creator: {
                firstName: utils.getText(firstName),
                lastName: utils.getText(lastName),
                emailAddress: emailAddress,
                phoneNumber: utils.getPhoneNumber(creatorPhoneNumber),
                website: utils.getUrl(creatorWebsite)
            }
        })
        const invitationLink = this.urlBuilder.getCommunityInvitationUrl(communityKey)
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

    async joinCommunity (communityKey: string, personEmail: string): Promise<Community | null> {
        return null
    }

    optIn (communityId: string): string {
        return ""
    }
}