import { givenCommunityComponent, givenGetServerSidePropsContext, givenUrlBuilder } from "../../../testUtils"
import { getServerSidePropsImpl } from "../index"
import { JoinConfirmationToken } from "../../../urlBuilder"


export default describe("getServerSidePropsImpl", () => {
    test("should return props", async () => {
        // Arrange
        const { mock: communityComponent, joinCommunityByEncryptedToken } = givenCommunityComponent()
        const { mock: urlBuilder, getJoinConfirmationToken } = givenUrlBuilder()
        const context = givenGetServerSidePropsContext()

        getJoinConfirmationToken.mockImplementation(() => (new JoinConfirmationToken("communityKey", "a@b.c")))

        joinCommunityByEncryptedToken.mockImplementation(() => ({
            communityTitle: "title",
            alreadyJoined: undefined
        }))

        // Act
        const props = await getServerSidePropsImpl(
            context,
            communityComponent(),
            urlBuilder()
        )

        // Assert
        expect(joinCommunityByEncryptedToken).toBeCalledWith("communityKey", "a@b.c", expect.any(Number))

        expect(props).toEqual({
            props: {
                communityTitle: "title",
                alreadyJoined: undefined
            }
        })
    })

    test("should return props: already joined", async () => {
        // Arrange
        const { mock: communityComponent, joinCommunityByEncryptedToken } = givenCommunityComponent()
        const { mock: urlBuilder, getJoinConfirmationToken } = givenUrlBuilder()
        const context = givenGetServerSidePropsContext()

        getJoinConfirmationToken.mockImplementation(() => (new JoinConfirmationToken("communityKey", "a@b.c")))

        joinCommunityByEncryptedToken.mockImplementation(() => ({
            communityTitle: "title",
            alreadyJoined: true
        }))

        // Act
        const props = await getServerSidePropsImpl(
            context,
            communityComponent(),
            urlBuilder()
        )

        // Assert
        expect(joinCommunityByEncryptedToken).toBeCalledWith("communityKey", "a@b.c", expect.any(Number))

        expect(props).toEqual({
            props: {
                communityTitle: "title",
                alreadyJoined: true
            }
        })
    })
})