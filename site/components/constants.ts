export const BaseUrl =
    process.env["NODE_ENV"] == "development" || process.env["NODE_ENV"] == "test" ?
        "http://localhost:5000/" :
        "https://spiced-f9677.web.app/"

export const Forms = {
    accessToken: "CnLWx37r88w9NoqC5H3UrkVM1UDgNYVBt9VQi22aDURm",
    createCommunityFormId: "NaV9AthP"
}