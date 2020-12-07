import { isDevelopment, isServer, isTest } from "../api/utils"

export type EnvironmentType = "local" | "localTest" | "production"

export function getCurrentEnvironment(): EnvironmentType {
    if (isTest()) {
        return "localTest"
    } else if (isDevelopment()) {
        return "local"
    } else {
        return "production"
    }
}

export function getCreateCommunityFormDescriptor(forceEnv: EnvironmentType | null = null) {
    switch (forceEnv || getCurrentEnvironment()) {
        case "local":
        case "localTest":
            return {
                formId: "ZnTlu6xW",
                name: "createCommunity",
                answers: {
                    creatorFirstName: "coIxkpTSKjJ4",
                    creatorLastName: "GubCq4Bo9Ni1",
                    communityTitle: "YXXkWGKUuszK",
                    communityPublicLink: "53wtCPkMeas4",
                    creatorEmailAddress: "XDtORa3rfWrI",
                    creatorPhoneNumber: "7bpwmM9IWghY",
                    creatorWebsite: "hqT3TtzvHAnk"
                }
            }

        case "production":
            return {
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
            }

        default:
            throw new Error("Invalid environment")
    }
}

export function getJoinCommunityFormDescriptor(forceEnv: EnvironmentType | null = null) {
    switch (forceEnv || getCurrentEnvironment()) {
        case "local":
        case "localTest":
            return {
                formId: "USJctwZB",
                name: "joinCommunity",
                hiddenFields: {
                    // TypeForm automatically converts all hidden fields names to lowercase.
                    // No camel case here!
                    communityTitle: "communitytitle",
                    communityId: "communityid"
                },
                answers: {
                    memberFirstName: "MGNzsLjqQNPx",
                    memberLastName: "w7xEx7ZYvU9R",
                    memberEmailAddress: "DNtQj5I9asYC",
                    memberPhoneNumber: "lUVNZbKkMdz9",
                    memberWebsite: "iAqJ00SMa5gi"
                }
            }

        case "production":
            return {
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
            }

        default:
            throw new Error("Invalid environment")

    }
}

export const Forms = {
    accessToken: isServer() ? "CnLWx37r88w9NoqC5H3UrkVM1UDgNYVBt9VQi22aDURm" : "",

    createCommunity: getCreateCommunityFormDescriptor(),
    joinCommunity: getJoinCommunityFormDescriptor(),

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
            subject: () => "Your tmixed community is almost there",
            fields: {
                userFirstName: "userFirstName",
                createCommunityConfirmationUrl: "createCommunityConfirmationUrl"
            }
        },
        joinCommunityConfirmation: {
            name: "joinCommunityConfirmation",
            subject: () => "You are about to join community",
            fields: {
                communityTitle: "communityTitle",
                userFirstName: "userFirstName",
                joinCommunityConfirmationUrl: "joinCommunityConfirmationUrl"
            }
        },
        communityJoined: {
            name: "communityJoined",
            subject: (communityTitle: string) => `You have successfully joined ${communityTitle}!`,
            fields: {
                userFirstName: "userFirstName",
                communityTitle: "communityTitle"
            }
        },
        communityCreated: {
            name: "communityCreated",
            subject: () => "Here is your community invitation link",
            fields: {
                communityTitle: "communityTitle",
                communityInvitationLink: "communityInvitationLink"
            }
        },
        noMatch: {
            name: "noMatch",
            subject: (communityTitle: string) => `Your tmixed match for this week from ${communityTitle}`,
            fields: {
                communityTitle: "communityTitle",
                userFirstName: "userFirstName",
                communityInvitationLink: "communityInvitationLink"
            }
        },
        matched: {
            name: "matched",
            subject: (communityTitle: string) => `Your tmixed match for this week from ${communityTitle}`,
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
            subject: (communityTitle: string) => `Are you participating in ${communityTitle} calls next week?`,
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
    getFunctionsBaseUrl(forceEnv: EnvironmentType | null = null): string {
        switch (forceEnv || getCurrentEnvironment()) {
            case "local":
            case "localTest":
                return "https://massive-stingray-89.loca.lt/spiced-f9677/us-central1"
            case "production":
                return "https://us-central1-spiced-f9677.cloudfunctions.net"
            default:
                return ""
        }
    },
    getBaseUrl(forceEnv: EnvironmentType | null = null): string {
        switch (forceEnv || getCurrentEnvironment()) {
            case "local":
            case "localTest":
                return "https://tiny-liger-40.loca.lt"
            case "production":
                return "https://tmixed.co"
            default:
                return ""

        }
    }
}