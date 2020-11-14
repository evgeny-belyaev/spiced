import { TokenEncryptor } from "../TokenEncryptor"
import { FormsApi } from "../forms"
import { Forms, Url } from "../constants"
import { MailComponent } from "../mail"

type CreateCommunityResult = {
    communityInvitationLink: string
}

export class CommunityComponent {
    private tokenEncryptor: TokenEncryptor
    private formsApi: FormsApi
    private mailComponent: MailComponent

    constructor(tokenEncryptor: TokenEncryptor, formsApi: FormsApi, mailComponent: MailComponent) {
        this.tokenEncryptor = tokenEncryptor
        this.formsApi = formsApi
        this.mailComponent = mailComponent
    }

    async sendCreateCommunityConfirmationEmail(formResponseId: string, email: string): Promise<void> {
        if (!formResponseId || !email) {
            throw Error("Invalid argument")
        }

        await this.mailComponent.sendTemplate("createCommunityConfirmation", [{
            name: "createCommunityConfirmationUrl",
            content: Url.getCreateCommunityConfirmationUrl(this.tokenEncryptor.encrypt(formResponseId))
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