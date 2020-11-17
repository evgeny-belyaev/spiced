import { TokenEncryptor } from "../TokenEncryptor"
import { FormsApi } from "../forms/formsApi"
import { Forms, MailChimp, Url } from "../constants"
import { MailComponent } from "../mail"
import { Logger } from "../logger"
import { FormsUtils } from "../forms/formsUtils"
import { SpicedDatabase } from "../database/spicedDatabase"
import { BaseError } from "../baseError"
import { Community } from "../database/types"

type CreateCommunityResult = {
    communityInvitationLink?: string,
    error?: BaseError
}

export class CommunityComponent {
    private tokenEncryptor: TokenEncryptor
    private formsApi: FormsApi
    private mailComponent: MailComponent
    private spicedDatabase: SpicedDatabase

    private log = new Logger("CommunityComponent")

    constructor (
        tokenEncryptor: TokenEncryptor,
        formsApi: FormsApi,
        mailComponent: MailComponent,
        spicedDatabase: SpicedDatabase
    ) {
        this.tokenEncryptor = tokenEncryptor
        this.formsApi = formsApi
        this.mailComponent = mailComponent
        this.spicedDatabase = spicedDatabase
    }

    async sendCreateCommunityConfirmationEmail (formResponseId: string, email: string): Promise<void> {
        if (!formResponseId || !email) {
            throw Error("Invalid argument")
        }

        const content = `<a href="${Url.getCreateCommunityConfirmationUrl(this.tokenEncryptor.encrypt(formResponseId))}">Click me</a>`
        this.log.debug(`Sending community link with ${formResponseId} to ${email} content is ${content}`)

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

    async findCommunityByEncryptedToken (encryptedToken: string): Promise<Community | null> {
        const decryptedToken = this.tokenEncryptor.decrypt(encryptedToken)
        return await this.spicedDatabase.getCommunityById(decryptedToken)
    }

    async createCommunity (encryptedToken: string): Promise<CreateCommunityResult> {
        const typeformResponseId = this.tokenEncryptor.decrypt(encryptedToken)
        const answers = await this.formsApi.getAnswers(
            Forms.createCommunity.formId,
            typeformResponseId
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
            typeFormResponseId: typeformResponseId,
            creator: {
                firstName: utils.getText(firstName),
                lastName: utils.getText(lastName),
                emailAddress: emailAddress,
                phoneNumber: utils.getPhoneNumber(creatorPhoneNumber),
                website: utils.getUrl(creatorWebsite)
            }
        })
        const invitationLink = Url.getCommunityInvitationLink(this.tokenEncryptor.encrypt(communityKey))
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

    joinCommunity (communityId: string, userId: string): string {
        return ""
    }

    optIn (communityId: string): string {
        return ""
    }
}