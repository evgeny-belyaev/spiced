import { CommunityComponent } from "./logic/CommunityComponent"
import { MailComponent } from "./mail"
import { FormsApi } from "./forms/formsApi"
import { TokenEncryptor } from "./TokenEncryptor"
import { SpicedDatabase } from "./database/spicedDatabase"
import { ParsedUrlQuery } from "querystring"
import { IncomingMessage, ServerResponse } from "http"
import { UrlBuilder } from "./urlBuilder"
import crypto from "crypto"

export const givenUrlBuilder = () => {
    const getCreateCommunityConfirmationUrl = jest.fn()
    const getCreateCommunityConfirmationToken = jest.fn()
    const getJoinConfirmationToken = jest.fn()
    const getInvitationToken = jest.fn()
    const getJoinCommunityConfirmationUrl = jest.fn()
    const getCommunityInvitationUrl = jest.fn()

    return {
        mock: jest.fn<UrlBuilder>(() => ({
            getCreateCommunityConfirmationUrl,
            getCreateCommunityConfirmationToken,
            getJoinConfirmationToken,
            getInvitationToken,
            getJoinCommunityConfirmationUrl,
            getCommunityInvitationUrl
        })),

        getCreateCommunityConfirmationUrl,
        getCreateCommunityConfirmationToken,
        getJoinConfirmationToken,
        getInvitationToken,
        getJoinCommunityConfirmationUrl,
        getCommunityInvitationUrl
    }
}

export const givenCommunityComponent = () => {
    const createCommunity = jest.fn()
    const findCommunityById = jest.fn()
    const sendJoinCommunityConfirmationEmail = jest.fn()
    const sendCreateCommunityConfirmationEmail = jest.fn()
    const joinCommunityByEncryptedToken = jest.fn()

    return {
        mock: jest.fn<CommunityComponent>(() => ({
            createCommunity,
            findCommunityById,
            sendJoinCommunityConfirmationEmail,
            sendCreateCommunityConfirmationEmail,
            joinCommunity: joinCommunityByEncryptedToken
        })),

        createCommunity,
        findCommunityById,
        sendJoinCommunityConfirmationEmail,
        sendCreateCommunityConfirmationEmail,
        joinCommunityByEncryptedToken
    }
}


export function givenTokenEncryptor () {
    const decrypt = jest.fn(() => ("decrypted"))
    const encrypt = jest.fn(() => ("encrypted"))

    const tokenEncryptorMock = jest.fn<TokenEncryptor>(() => ({
        decrypt, encrypt
    }))

    return {
        mock: tokenEncryptorMock,
        decrypt, encrypt
    }
}

export function givenMailComponent () {
    const getAnswers = jest.fn()
    const sendTemplate = jest.fn()

    return {
        mock: jest.fn<MailComponent>(() => ({
            getAnswers, sendTemplate
        })),
        getAnswers,
        sendTemplate
    }
}

export function givenFormsApi () {
    const getAnswers = jest.fn()
    const getResponse = jest.fn()

    return {
        mock: jest.fn<FormsApi>(() => ({
            getAnswers,
            getResponse
        })),
        getAnswers,
        getResponse
    }
}

export function givenSpicedDatabase () {
    const createCommunity = jest.fn()
    const getCommunityById = jest.fn()
    const createUser = jest.fn()
    const getUserByEmail = jest.fn()
    const createMember = jest.fn()
    const getMembers = jest.fn()

    return {
        mock: jest.fn<SpicedDatabase>(() => ({
            createCommunity,
            getCommunityById,
            getUserByEmail,
            createMember,
            getMembers,
            createUser

        })),
        createCommunity,
        getCommunityById,
        getUserByEmail,
        createMember,
        getMembers,
        createUser
    }
}

export const givenGetServerSidePropsContext = (params: ParsedUrlQuery = {}) => ({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    req: jest.fn<IncomingMessage>()(),

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    res: jest.fn<ServerResponse>()(),

    query: {},
    resolvedUrl: "",
    params
})

export const givenRandomString = (length = 20) =>
    crypto.randomBytes(length / 2).toString("hex")