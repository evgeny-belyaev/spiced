import { TokenEncryptor } from "../TokenEncryptor"
import { FormsApi } from "../forms"
import { Forms, MailChimp, Url } from "../constants"
import { MailComponent } from "../mail"
import { Logger } from "../logger"

type CreateCommunityResult = {
    communityInvitationLink: string
}



export class CommunityComponent {
    private tokenEncryptor: TokenEncryptor
    private formsApi: FormsApi
    private mailComponent: MailComponent

    private log = new Logger("CommunityComponent")

    constructor(tokenEncryptor: TokenEncryptor, formsApi: FormsApi, mailComponent: MailComponent) {
        this.tokenEncryptor = tokenEncryptor
        this.formsApi = formsApi
        this.mailComponent = mailComponent
    }

    async sendCreateCommunityConfirmationEmail(formResponseId: string, email: string): Promise<void> {
        if (!formResponseId || !email) {
            throw Error("Invalid argument")
        }

        this.log.debug(`Sending community link with ${formResponseId} to ${email}`)

        await this.mailComponent.sendTemplate(
            email,
            "Community creation confirmation",
            "contact@wowyougotamatch.com",
            MailChimp.Templates.createCommunityConfirmation,
            [{
                name: "createCommunityConfirmationUrl",
                content: `<a heref="${Url.getCreateCommunityConfirmationUrl(this.tokenEncryptor.encrypt(formResponseId))}">Click me</a>`
            }])
    }

    async createCommunity(encryptedToken: string): Promise<CreateCommunityResult> {
        const answers = await this.formsApi.getAnswers(
            Forms.createCommunityFormId,
            this.tokenEncryptor.decrypt(encryptedToken)
        )

        console.log(JSON.stringify(answers))

        // const communityKey = await spicedDatabase().createCommunity({
        //     title: "params.description",
        //     description: "params.description",
        //     creatorId: "params.userId"
        // })

        return {
            communityInvitationLink: "communityInvitationLink"
            // communityInvitationLink: Url.getCommunityInvitationLink(this.tokenEncryptor.encrypt(communityKey))
        }
    }

    joinCommunity(communityId: string, userId: string): string {
        return ""
    }

    optIn(communityId: string): string {
        return ""
    }
}