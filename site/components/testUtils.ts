import { CommunityComponent } from "./logic/CommunityComponent"
import { MailComponent } from "./mail"
import { FormsApi } from "./forms/formsApi"
import { TokenEncryptor } from "./TokenEncryptor"
import { SpicedDatabase } from "./database/spicedDatabase"
import { ParsedUrlQuery } from "querystring"
import { IncomingMessage, ServerResponse } from "http"
import { UrlBuilder } from "./urlBuilder"
import { Matcher } from "./logic/matcher"
import * as crypto from "crypto"

export const givenUrlBuilder = () => {
    const getCreateCommunityConfirmationUrl = jest.fn()
    const getCreateCommunityConfirmationToken = jest.fn()
    const getJoinConfirmationToken = jest.fn()
    const getInvitationToken = jest.fn()
    const getJoinCommunityConfirmationUrl = jest.fn()
    const getCommunityInvitationUrl = jest.fn()
    const getOptInConfirmationUrl = jest.fn()
    const getOptInToken = jest.fn()

    return {
        mock: jest.fn<UrlBuilder>(() => ({
            getCreateCommunityConfirmationUrl,
            getCreateCommunityConfirmationToken,
            getJoinConfirmationToken,
            getInvitationToken,
            getJoinCommunityConfirmationUrl,
            getCommunityInvitationUrl,
            getOptInConfirmationUrl,
            getOptInToken
        })),

        getCreateCommunityConfirmationUrl,
        getCreateCommunityConfirmationToken,
        getJoinConfirmationToken,
        getInvitationToken,
        getJoinCommunityConfirmationUrl,
        getCommunityInvitationUrl,
        getOptInConfirmationUrl,
        getOptInToken
    }
}

export const givenCommunityComponent = () => {
    const createCommunity = jest.fn()
    const findCommunityById = jest.fn()
    const sendJoinCommunityConfirmationEmail = jest.fn()
    const sendCreateCommunityConfirmationEmail = jest.fn()
    const joinCommunityByEncryptedToken = jest.fn()
    const optIn = jest.fn()
    const monday = jest.fn()
    const sendOptInRequest = jest.fn()

    return {
        mock: jest.fn<CommunityComponent>(() => ({
            createCommunity,
            findCommunityById,
            sendJoinCommunityConfirmationEmail,
            sendCreateCommunityConfirmationEmail,
            joinCommunity: joinCommunityByEncryptedToken,
            optIn,
            monday,
            sendOptInRequest
        })),

        createCommunity,
        findCommunityById,
        sendJoinCommunityConfirmationEmail,
        sendCreateCommunityConfirmationEmail,
        joinCommunityByEncryptedToken,
        optIn,
        monday,
        sendOptInRequest
    }
}


export function givenTokenEncryptor() {
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

export function givenMailComponent() {
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

export function givenFormsApi() {
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

export function givenSpicedDatabase() {
    const createCommunity = jest.fn()
    const getCommunityById = jest.fn()
    const createUser = jest.fn()
    const getUserByEmail = jest.fn()
    const createMember = jest.fn()
    const getMembers = jest.fn()
    const getPreviouslyMatched = jest.fn()
    const setMatches = jest.fn()
    const setMatchedCommunity = jest.fn()
    const setPreviouslyMatched = jest.fn()
    const getCommunitiesIds = jest.fn()
    const getMatches = jest.fn()
    const getUserById = jest.fn()
    const getOptedInCommunities = jest.fn()
    const getOptedInUsers = jest.fn()
    const getUserId = jest.fn()
    const pushStat = jest.fn()
    const getCommunityIdByTypeFormResponseId = jest.fn()

    return {
        mock: jest.fn<SpicedDatabase>(() => ({
            createCommunity,
            getCommunityById,
            getUserByEmail,
            createMember,
            getMembers,
            createUser,
            getPreviouslyMatched,
            setMatches,
            setMatchedCommunity,
            setPreviouslyMatched,
            getCommunitiesIds,
            getMatches,
            getUserById,
            getOptedInCommunities,
            getOptedInUsers,
            getUserId,
            pushStat,
            getCommunityIdByTypeFormResponseId
        })),

        createCommunity,
        getCommunityById,
        getUserByEmail,
        createMember,
        getMembers,
        createUser,
        getPreviouslyMatched,
        setMatches,
        setMatchedCommunity,
        setPreviouslyMatched,
        getCommunitiesIds,
        getMatches,
        getUserById,
        getOptedInCommunities,
        getOptedInUsers,
        getUserId,
        pushStat,
        getCommunityIdByTypeFormResponseId
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

export const givenMatcher = () => {
    const calculateMatch = jest.fn()
    const getTimeSpanId = jest.fn()
    const saveMatches = jest.fn()
    const getNextTimeSpanId = jest.fn()

    return {
        mock: jest.fn<Matcher>(() => ({
            calculateMatch,
            getTimeSpanId,
            saveMatches,
            getNextTimeSpanId
        })),

        calculateMatch,
        getTimeSpanId,
        saveMatches,
        getNextTimeSpanId
    }
}

export const givenRandomString = (length = 20) =>
    crypto.randomBytes(length / 2).toString("hex")