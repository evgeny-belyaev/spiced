import { TokenEncryptor } from "./TokenEncryptor"
import { Url } from "./constants"
import { GetServerSidePropsContext } from "next"


export class CreateCommunityConfirmationToken {
    constructor(public formsResponseId: string) {
    }

    static fromString(s: string): CreateCommunityConfirmationToken {
        return JSON.parse(s) as CreateCommunityConfirmationToken
    }
}

export class InvitationToken {
    constructor(public communityKey: string) {
    }

    static fromString(s: string): InvitationToken {
        return JSON.parse(s) as InvitationToken
    }
}

export class JoinConfirmationToken {
    constructor(public communityId: string, public formResponseId: string) {
    }

    static fromString(s: string): JoinConfirmationToken {
        return JSON.parse(s) as JoinConfirmationToken
    }
}

export class OptInToken {
    constructor(
        public communityId: string,
        public timeSpanId: string,
        public userId: string,
        public optIn: boolean) {
    }

    static fromString(s: string): OptInToken {
        return JSON.parse(s) as OptInToken
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
    constructor(private tokenEncryptor: TokenEncryptor) {
    }

    private encrypt(data: unknown) {
        return this.tokenEncryptor.encrypt(JSON.stringify(data))
    }

    private getTokenByKey(context: GetServerSidePropsContext, key: string) {
        const encryptedToken = String(context.params ? context.params[key] : "")
        const decrypted = this.tokenEncryptor.decrypt(encryptedToken)

        return decrypted
    }


    getCreateCommunityConfirmationUrl(formResponseId: string) {
        const token = new CreateCommunityConfirmationToken(formResponseId)
        return Url.getBaseUrl() + "/createCommunity/" + this.encrypt(token)
    }

    getCreateCommunityConfirmationToken(context: GetServerSidePropsContext): CreateCommunityConfirmationToken {
        const decrypted = this.getTokenByKey(context, "CreateCommunityConfirmationToken")
        return CreateCommunityConfirmationToken.fromString(decrypted)
    }


    getCommunityInvitationUrl(communityKey: string): string {
        const token = new InvitationToken(communityKey)
        return Url.getBaseUrl() + "/invitation/" + this.encrypt(token)
    }

    getInvitationToken(context: GetServerSidePropsContext): InvitationToken {
        const decrypted = this.getTokenByKey(context, "InvitationToken")
        return InvitationToken.fromString(decrypted)
    }


    getJoinCommunityConfirmationUrl(communityKey: string, formResponseId: string): string {
        const token = new JoinConfirmationToken(communityKey, formResponseId)
        return Url.getBaseUrl() + "/join/" + this.encrypt(token)
    }

    getJoinConfirmationToken(context: GetServerSidePropsContext): JoinConfirmationToken {
        const decrypted = this.getTokenByKey(context, "JoinConfirmationToken")
        return JoinConfirmationToken.fromString(decrypted)
    }


    getOptInConfirmationUrl(communityId: string, timeSpanId: string, userId: string, optIn: boolean): string {
        const token = new OptInToken(communityId, timeSpanId, userId, optIn)
        return Url.getBaseUrl() + "/optin/" + this.encrypt(token)
    }

    getOptInToken(context: GetServerSidePropsContext): OptInToken {
        const decrypted = this.getTokenByKey(context, "OptInToken")
        return OptInToken.fromString(decrypted)
    }
}