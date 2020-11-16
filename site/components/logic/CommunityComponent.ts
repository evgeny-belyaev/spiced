import { TokenEncryptor } from "../TokenEncryptor"
import { FormsApi } from "../forms/formsApi"
import { Forms, MailChimp, Url } from "../constants"
import { MailComponent } from "../mail"
import { Logger } from "../logger"
import { FormsUtils } from "../forms/formsUtils"
import { SpicedDatabase } from "../database/spicedDatabase"

type CreateCommunityResult = {
    communityInvitationLink: string
}


export class CommunityComponent {
    private tokenEncryptor: TokenEncryptor
    private formsApi: FormsApi
    private mailComponent: MailComponent
    private spicedDatabase: SpicedDatabase

    private log = new Logger("CommunityComponent")

    constructor(
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

    async sendCreateCommunityConfirmationEmail(formResponseId: string, email: string): Promise<void> {
        if (!formResponseId || !email) {
            throw Error("Invalid argument")
        }

        const content = `<a href="${Url.getCreateCommunityConfirmationUrl(this.tokenEncryptor.encrypt(formResponseId))}">Click me</a>`
        this.log.debug(`Sending community link with ${formResponseId} to ${email} content is ${content}`)

        await this.mailComponent.sendTemplate(
            email,
            "Community creation confirmation",
            "contact@wowyougotamatch.com",
            MailChimp.Templates.createCommunityConfirmation,
            [{
                name: "createCommunityConfirmationUrl",
                content
            }])
    }

    async createCommunity(encryptedToken: string): Promise<CreateCommunityResult> {
        const answers = await this.formsApi.getAnswers(
            Forms.createCommunity.formId,
            this.tokenEncryptor.decrypt(encryptedToken)
        )

        this.log.debug("Form answers are", answers)

        const utils = new FormsUtils()

        const firstName = utils.getAnswerById(answers, Forms.createCommunity.fields.firstName)
        const lastName = utils.getAnswerById(answers, Forms.createCommunity.fields.lastName)
        const communityTitle = utils.getAnswerById(answers, Forms.createCommunity.fields.communityTitle)
        const communityPublicLink = utils.getAnswerById(answers, Forms.createCommunity.fields.communityPublicLink)
        const creatorEmailAddress = utils.getAnswerById(answers, Forms.createCommunity.fields.creatorEmailAddress)
        const creatorPhoneNumber = utils.getAnswerById(answers, Forms.createCommunity.fields.creatorPhoneNumber)
        const creatorWebsite = utils.getAnswerById(answers, Forms.createCommunity.fields.creatorWebsite)

        const communityKey = await this.spicedDatabase.createCommunity({
            title: utils.getText(communityTitle),
            publicLink: utils.getUrl(communityPublicLink),
            creator: {
                firstName: utils.getText(firstName),
                lastName: utils.getText(lastName),
                emailAddress: utils.getEmail(creatorEmailAddress),
                phoneNumber: utils.getPhoneNumber(creatorPhoneNumber),
                website: utils.getUrl(creatorWebsite)
            }
        })

        return {
            communityInvitationLink: Url.getCommunityInvitationLink(this.tokenEncryptor.encrypt(communityKey))
        }
    }

    joinCommunity(communityId: string, userId: string): string {
        return ""
    }

    optIn(communityId: string): string {
        return ""
    }
}