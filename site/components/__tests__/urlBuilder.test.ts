import { CreateCommunityConfirmationToken, InvitationToken, JoinConfirmationToken, UrlBuilder } from "../urlBuilder"
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
        expect(url).toEqual(`${Url.getBaseUrl()}/createCommunity/encrypted`)
    })

    test("getCreateCommunityConfirmationToken", () => {
        // Arrange
        const { mock: tokenEncryptor, decrypt } = givenTokenEncryptor()
        const urlBuilder = new UrlBuilder(tokenEncryptor())
        const context = givenGetServerSidePropsContext({
            CreateCommunityConfirmationToken: "encrypted"
        })

        decrypt.mockImplementation(() =>("{\"formsResponseId\":\"asd\"}"))

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
        const url = urlBuilder.getCommunityInvitationUrl("communityKey")

        // Assert
        expect(url).toEqual(`${Url.getBaseUrl()}/invitation/encrypted`)
    })

    test("getInvitationToken", () => {
        // Arrange
        const { mock: tokenEncryptor, decrypt } = givenTokenEncryptor()
        const urlBuilder = new UrlBuilder(tokenEncryptor())
        const context = givenGetServerSidePropsContext({
            InvitationToken: "encrypted"
        })

        decrypt.mockImplementation(() =>("{\"communityKey\":\"asd\"}"))

        // Act
        const token = urlBuilder.getInvitationToken(context)

        // Assert
        expect(decrypt).toBeCalledWith("encrypted")
        expect(token).toEqual(new InvitationToken("asd"))
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

        decrypt.mockImplementation(() =>("{\"communityId\":\"communityId\", \"formResponseId\":\"777\"}"))

        // Act
        const token = urlBuilder.getJoinConfirmationToken(context)

        // Assert
        expect(decrypt).toBeCalledWith("encrypted")
        expect(token).toEqual(new JoinConfirmationToken("communityId", "777"))
    })
})