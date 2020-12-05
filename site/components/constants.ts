import { isDevelopment, isIntegration, isServer, isTest } from "../api/utils"

export const Forms = {
    accessToken: isServer() ? "CnLWx37r88w9NoqC5H3UrkVM1UDgNYVBt9VQi22aDURm" : "",

    createCommunity: {
        formId: "NaV9AthP",
        name: "createCommunity",
        answers: {
            creatorFirstName: "iRELkeOPH06I",
            creatorLastName: "9IoVfWEsWEJm",
            communityTitle: "hzQC3bQ87sQL",
            communityPublicLink: "Uukms7hM8K5i",
            creatorEmailAddress: "B8IPm7Osl6R1",
            creatorPhoneNumber: "iSTnU99AXZ3z",
            creatorWebsite: "QxmULEP1S82p"
        }
    },

    joinCommunity: {
        formId: "Y6665JuG",
        name: "joinCommunity",
        hiddenFields: {
            // TypeForm automatically converts all hidden fields names to lowercase.
            // No camel case here!
            communityTitle: "communitytitle",
            communityId: "communityid"
        },
        answers: {
            memberFirstName: "yTfniwfEZHmy",
            memberLastName: "7pfMxKZlyBqe",
            memberEmailAddress: "fWuSaWrKCVbZ",
            memberPhoneNumber: "3kIm7gd9aPCl",
            memberWebsite: "bKxH0PJxunet"
        }
    },

    getResponsesUrl(formId: string, includedResponsesIds: string[]): string {
        if (includedResponsesIds.length == 0) {
            throw Error("Invalid argument: includedResponsesIds")
        }

        const included_responses_ids = includedResponsesIds ? `included_response_ids=${includedResponsesIds.join(",")}` : ""
        const query = included_responses_ids

        return `https://api.typeform.com/forms/${formId}/responses?${query}`
    }
}

export const MailChimp = {
    from: "no-reply@tmixed.co",

    marketingAccessToken: isServer() ? "5ef474ca75d706884cc1b905dd8cf091-us2" : "",
    transactionalAccessToken: isServer() ? "AOOq73pypJb5533oSKdqEw" : "",
    server: isServer() ? "us2" : "",
    audienceId: isServer() ? "94657a4562" : "",

    Templates: {
        createCommunityConfirmation: {
            name: "createCommunityConfirmation",
            fields: {
                userFirstName: "userFirstName",
                createCommunityConfirmationUrl: "createCommunityConfirmationUrl"
            }
        },
        joinCommunityConfirmation: {
            name: "joinCommunityConfirmation",
            fields: {
                communityTitle: "communityTitle",
                userFirstName: "userFirstName",
                joinCommunityConfirmationUrl: "joinCommunityConfirmationUrl"
            }
        },
        communityJoined: {
            name: "communityJoined",
            fields: {
                userFirstName: "userFirstName",
                communityTitle: "communityTitle"
            }
        },
        communityCreated: {
            name: "communityCreated",
            fields: {
                communityTitle: "communityTitle",
                communityInvitationLink: "communityInvitationLink"
            }
        },
        noMatch: {
            name: "noMatch",
            fields: {
                communityTitle: "communityTitle",
                userFirstName: "userFirstName",
                communityInvitationLink: "communityInvitationLink"
            }
        },
        matched: {
            name: "matched",
            fields: {
                userFirstName: "userFirstName",

                matchedUserEmail: "matchedUserEmail",
                matchedUserPhone: "matchedUserPhone",

                matchedUserFirstName: "matchedUserFirstName",
                matchedUserLastName: "matchedUserLastName",

                matchedUserProfileUrl: "matchedUserProfileUrl",
                communityTitle: "communityTitle"
            }
        },
        optIn: {
            name: "optIn",
            fields: {
                userFirstName: "userFirstName",
                communityTitle: "communityTitle",
                yesUrl: "yesUrl",
                noUrl: "noUrl"
            }
        }
    }
}

export const Database = {
    accessToken: isServer() ? "AIzaSyAsoRfHyVtfB0VE-t3eSfgpoEi0FLsXnH0" : "",
    user: isServer() ? "ugene.software@gmail.com" : "",
    password: isServer() ? "dB96813e8!d1e84af03_26Cb317$E1f5e094?" : "",
    url: isServer() ? "https://spiced-f9677.firebaseio.com/" : ""
}

export const Url = {
    getBaseUrl(): string {
        if (isDevelopment() || isTest() || isIntegration()) {
            return "http://localhost:5000"
        } else {
            return "https://tmixed.co"
            //return "https://tiny-liger-40.loca.lt"
        }
    }
}