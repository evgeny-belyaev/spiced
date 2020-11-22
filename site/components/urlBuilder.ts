import { TokenEncryptor } from "./TokenEncryptor"
import { Url } from "./constants"
import { GetServerSidePropsContext } from "next"


export class CreateCommunityConfirmationToken {
    constructor (public formsResponseId: string) {
    }

    static fromString (s: string): CreateCommunityConfirmationToken {
        return JSON.parse(s) as CreateCommunityConfirmationToken
    }
}

export class InvitationToken {
    constructor (public communityKey: string) {
    }

    static fromString (s: string): InvitationToken {
        return JSON.parse(s) as InvitationToken
    }
}

export class JoinConfirmationToken {
    constructor (public communityId: string, public formResponseId: string) {
    }

    static fromString (s: string): JoinConfirmationToken {
        return JSON.parse(s) as JoinConfirmationToken
    }
}


export class UrlBuilder {
    /**
     * The flow
     *
     *  Create:
     *      createCommunity/index - fill in form
     *      api/createCommunity/hook - get responses, send confirmation email with CreateCommunityConfirmationToken
     *      createCommunity/[CreateCommunityConfirmationToken] - creates community, send email with invitation link
     *
     *  Join:
     *      invitation/[InvitationToken] - fill in form
     *      api/joinCommunity/hook - get responses, send confirmation email with JoinConfirmationToken
     *      join/[JoinConfirmationToken] - join user to community, send status email
     *
     */
    constructor (private tokenEncryptor: TokenEncryptor) {
    }

    private encrypt (data: unknown) {
        return this.tokenEncryptor.encrypt(JSON.stringify(data))
    }


    getCreateCommunityConfirmationUrl (formResponseId: string) {
        const token = new CreateCommunityConfirmationToken(formResponseId)
        return Url.getBaseUrl() + "/createCommunity/" + this.encrypt(token)
    }

    getCreateCommunityConfirmationToken(context: GetServerSidePropsContext): CreateCommunityConfirmationToken {
        const encryptedToken = String(context.params ? context.params["CreateCommunityConfirmationToken"] : "")
        const decrypted = this.tokenEncryptor.decrypt(encryptedToken)

        return CreateCommunityConfirmationToken.fromString(decrypted)
    }


    getCommunityInvitationUrl (communityKey: string): string {
        const token = new InvitationToken(communityKey)
        return Url.getBaseUrl() + "/invitation/" + this.encrypt(token)
    }

    getInvitationToken(context: GetServerSidePropsContext): InvitationToken {
        const encryptedToken = String(context.params ? context.params["InvitationToken"] : "")
        const decrypted = this.tokenEncryptor.decrypt(encryptedToken)

        return InvitationToken.fromString(decrypted)
    }


    getJoinCommunityConfirmationUrl (communityKey: string, formResponseId: string): string {
        const token = new JoinConfirmationToken(communityKey, formResponseId)
        return Url.getBaseUrl() + "/join/" + this.encrypt(token)
    }

    getJoinConfirmationToken(context: GetServerSidePropsContext): JoinConfirmationToken {
        const encryptedToken = String(context.params ? context.params["JoinConfirmationToken"] : "")
        const decrypted = this.tokenEncryptor.decrypt(encryptedToken)

        return JoinConfirmationToken.fromString(decrypted)
    }

}