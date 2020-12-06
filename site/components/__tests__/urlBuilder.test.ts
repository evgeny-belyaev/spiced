import { CreateCommunityConfirmationToken, JoinConfirmationToken, OptInToken, UrlBuilder } from "../urlBuilder"
import { givenGetServerSidePropsContext, givenTokenEncryptor } from "../testUtils"
import { Url } from "../constants"

export default describe("UrlBuilder", () => {
    test("getCreateCommunityConfirmationUrl", () => {
        // Arrange
        const { mock: tokenEncryptor } = givenTokenEncryptor()
        const urlBuilder = new UrlBuilder(tokenEncryptor())

        // Act
        const url = urlBuilder.getCreateCommunityConfirmationUrl("formResponseId")

        // Assert
        expect(url).toEqual(`${Url.getBaseUrl()}/create/encrypted`)
    })

    test("getCreateCommunityConfirmationToken", () => {
        // Arrange
        const { mock: tokenEncryptor, decrypt } = givenTokenEncryptor()
        const urlBuilder = new UrlBuilder(tokenEncryptor())
        const context = givenGetServerSidePropsContext({
            CreateCommunityConfirmationToken: "encrypted"
        })

        decrypt.mockImplementation(() => ("{\"formsResponseId\":\"asd\"}"))

        // Act
        const token = urlBuilder.getCreateCommunityConfirmationToken(context)

        // Assert
        expect(decrypt).toBeCalledWith("encrypted")
        expect(token).toEqual(new CreateCommunityConfirmationToken("asd"))
    })

    test("getCommunityInvitationUrl", () => {
        // Arrange
        const { mock: tokenEncryptor } = givenTokenEncryptor()
        const urlBuilder = new UrlBuilder(tokenEncryptor())

        // Act
        const url = urlBuilder.getCommunityInvitationUrl("communityId")

        // Assert
        expect(url).toEqual(`${Url.getBaseUrl()}/invitation/communityId`)
    })

    test("getInvitationToken", () => {
        // Arrange
        const { mock: tokenEncryptor } = givenTokenEncryptor()
        const urlBuilder = new UrlBuilder(tokenEncryptor())
        const context = givenGetServerSidePropsContext({
            InvitationToken: "communityId"
        })

        // Act
        const token = urlBuilder.getInvitationToken(context)

        // Assert
        expect(token).toEqual("communityId")
    })

    test("getJoinCommunityConfirmationUrl", () => {
        // Arrange
        const { mock: tokenEncryptor, encrypt } = givenTokenEncryptor()
        const urlBuilder = new UrlBuilder(tokenEncryptor())

        // Act
        const url = urlBuilder.getJoinCommunityConfirmationUrl("communityId", "777")

        // Assert
        expect(encrypt).toBeCalledWith("{\"communityId\":\"communityId\",\"formResponseId\":\"777\"}")
        expect(url).toEqual(`${Url.getBaseUrl()}/join/encrypted`)
    })

    test("getJoinConfirmationToken", () => {
        // Arrange
        const { mock: tokenEncryptor, decrypt } = givenTokenEncryptor()
        const urlBuilder = new UrlBuilder(tokenEncryptor())
        const context = givenGetServerSidePropsContext({
            JoinConfirmationToken: "encrypted"
        })

        decrypt.mockImplementation(() => ("{\"communityId\":\"communityId\", \"formResponseId\":\"777\"}"))

        // Act
        const token = urlBuilder.getJoinConfirmationToken(context)

        // Assert
        expect(decrypt).toBeCalledWith("encrypted")
        expect(token).toEqual(new JoinConfirmationToken("communityId", "777"))
    })


    test("getOptInConfirmationUrl", () => {
        // Arrange
        const { mock: tokenEncryptor, encrypt } = givenTokenEncryptor()
        const urlBuilder = new UrlBuilder(tokenEncryptor())

        // Act
        const url = urlBuilder.getOptInConfirmationUrl("communityId", "777", "userId", true)

        // Assert
        expect(encrypt).toBeCalledWith("{\"communityId\":\"communityId\",\"timeSpanId\":\"777\",\"userId\":\"userId\",\"optIn\":true}")
        expect(url).toEqual(`${Url.getBaseUrl()}/optin/encrypted`)
    })

    test("getOptInToken", () => {
        // Arrange
        const { mock: tokenEncryptor, decrypt } = givenTokenEncryptor()
        const urlBuilder = new UrlBuilder(tokenEncryptor())
        const context = givenGetServerSidePropsContext({
            OptInToken: "encrypted"
        })

        decrypt.mockImplementation(() => ("{\"communityId\":\"communityId\",\"timeSpanId\":\"777\",\"userId\":\"userId\",\"optIn\":false}"))

        // Act
        const token = urlBuilder.getOptInToken(context)

        // Assert
        expect(decrypt).toBeCalledWith("encrypted")
        expect(token).toEqual(new OptInToken("communityId", "777", "userId", false))
    })
})