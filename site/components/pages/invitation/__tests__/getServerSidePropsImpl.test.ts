import { givenCommunityComponent, givenGetServerSidePropsContext, givenUrlBuilder } from "../../../testUtils"
import { getServerSidePropsImpl } from "../"
import { InvitationToken } from "../../../urlBuilder"


export default describe("getServerSidePropsImpl", () => {
    test("should return props", async () => {
        // Arrange
        const { mock: communityComponent, findCommunityByCommunityKey } = givenCommunityComponent()
        const { mock: urlBuilder, getInvitationToken } = givenUrlBuilder()
        const context = givenGetServerSidePropsContext()

        getInvitationToken.mockImplementation(() => (new InvitationToken("communityKey")))
        findCommunityByCommunityKey.mockImplementation(() => ({
            title: "title"
        }))

        // Act
        const props = await getServerSidePropsImpl(
            context,
            communityComponent(),
            urlBuilder()
        )

        // Assert
        expect(findCommunityByCommunityKey).toBeCalledWith("communityKey")
        expect(props).toEqual({
            props: {
                communityTitle: "title"
            }
        })
    })

    test("should return error when community not found", async () => {
        // Arrange
        const { mock: communityComponent, findCommunityByCommunityKey } = givenCommunityComponent()
        const { mock: urlBuilder, getInvitationToken } = givenUrlBuilder()
        const context = givenGetServerSidePropsContext()

        getInvitationToken.mockImplementation(() => (new InvitationToken("communityKey")))
        findCommunityByCommunityKey.mockImplementation(() => null)


        // Act
        const props = await getServerSidePropsImpl(
            context,
            communityComponent(),
            urlBuilder()
        )

        // Assert
        expect(findCommunityByCommunityKey).toBeCalledWith("communityKey")
        expect(props).toEqual({
            props: {
                error: "Cant' find community"
            }
        })
    })
})