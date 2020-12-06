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
        const encryptedToken = this.getQueryParameter(context, key)
        return this.tokenEncryptor.decrypt(encryptedToken)
    }

    private getQueryParameter(context: GetServerSidePropsContext, key: string) {
        return String(context.params ? context.params[key] : "")
    }


    getCreateCommunityConfirmationUrl(formResponseId: string) {
        const token = new CreateCommunityConfirmationToken(formResponseId)
        return Url.getBaseUrl() + "/create/" + this.encrypt(token)
    }

    getCreateCommunityConfirmationToken(context: GetServerSidePropsContext): CreateCommunityConfirmationToken {
        const decrypted = this.getTokenByKey(context, "CreateCommunityConfirmationToken")
        return CreateCommunityConfirmationToken.fromString(decrypted)
    }


    getCommunityInvitationUrl(communityKey: string): string {
        return Url.getBaseUrl() + "/invitation/" + communityKey
    }

    getInvitationToken(context: GetServerSidePropsContext): string {
        return this.getQueryParameter(context, "InvitationToken")
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