import { isServer } from "../api/utils"

export const Forms = {
    accessToken: isServer() ? "CnLWx37r88w9NoqC5H3UrkVM1UDgNYVBt9VQi22aDURm" : "",
    createCommunityFormId: "NaV9AthP",

    getResponsesUrl(formId: string, includedResponsesIds: string[]): string {
        if (includedResponsesIds.length == 0) {
            throw Error("Invalid argument: includedResponsesIds")
        }

        const included_responses_ids = includedResponsesIds ? `included_responses_ids=${includedResponsesIds.join(",")}` : ""
        const query = included_responses_ids

        return `https://api.typeform.com/forms/${formId}/responses?${query}`
    }
}

export const MailChimp = {
    marketingAccessToken: isServer() ? "5ef474ca75d706884cc1b905dd8cf091-us2" : "",
    transactionalAccessToken: isServer() ? "AOOq73pypJb5533oSKdqEw" : "",
    server: isServer() ? "us2" : "",
    audienceId: isServer() ? "94657a4562" : "",

    Templates: {
        createCommunityConfirmation: "createCommunityConfirmation"
    }
}

export const Database = {
    accessToken: isServer() ? "AIzaSyAsoRfHyVtfB0VE-t3eSfgpoEi0FLsXnH0" : "",
    url: isServer() ? "https://spiced-f9677.firebaseio.com/" : ""
}

export const Url = {
    getBaseUrl(): string {
        return process.env["NODE_ENV"] == "development" || process.env["NODE_ENV"] == "test" ?
            "http://localhost:5000" :
            "https://spiced-f9677.web.app"
    },

    getCreateCommunityConfirmationUrl(encryptedToken: string): string {
        return this.getBaseUrl() + "/createCommunity/" + encryptedToken
    },

    getCommunityInvitationLink(encryptedCommunityId: string): string {
        return this.getBaseUrl() + "/community/" + encryptedCommunityId
    }
}