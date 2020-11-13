import { isServer } from "../api/utils"

export const BaseUrl =
    process.env["NODE_ENV"] == "development" || process.env["NODE_ENV"] == "test" ?
        "http://localhost:5000/" :
        "https://spiced-f9677.web.app/"

export const Forms = {
    accessToken: isServer() ? "CnLWx37r88w9NoqC5H3UrkVM1UDgNYVBt9VQi22aDURm" : "",
    createCommunityFormId: "NaV9AthP"
}

export const MailChimp = {
    marketingAccessToken: isServer() ? "5ef474ca75d706884cc1b905dd8cf091-us2" : "",
    transactionalAccessToken : isServer() ? "AOOq73pypJb5533oSKdqEw" : "",
    server: isServer() ? "us2" : "",
    audienceId: isServer() ? "94657a4562" : ""
}

export const Database = {
    accessToken: isServer() ? "AIzaSyAsoRfHyVtfB0VE-t3eSfgpoEi0FLsXnH0" : "",
    url: "https://spiced-f9677.firebaseio.com/"
}