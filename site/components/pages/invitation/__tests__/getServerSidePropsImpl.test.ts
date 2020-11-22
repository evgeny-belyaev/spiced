import { givenCommunityComponent, givenGetServerSidePropsContext, givenUrlBuilder } from "../../../testUtils"
import { getServerSidePropsImpl } from "../"
import { InvitationToken } from "../../../urlBuilder"


export default describe("getServerSidePropsImpl", () => {
    test("should return props", async () => {
        // Arrange
        const { mock: communityComponent, findCommunityById } = givenCommunityComponent()
        const { mock: urlBuilder, getInvitationToken } = givenUrlBuilder()
        const context = givenGetServerSidePropsContext()

        getInvitationToken.mockImplementation(() => (new InvitationToken("communityKey")))
        findCommunityById.mockImplementation(() => ({
            title: "title"
        }))

        // Act
        const props = await getServerSidePropsImpl(
            context,
            communityComponent(),
            urlBuilder()
        )

        // Assert
        expect(findCommunityById).toBeCalledWith("communityKey")
        expect(props).toEqual({
            props: {
                communityTitle: "title",
                communityId: "communityKey"
            }
        })
    })

    test("should return error when community not found", async () => {
        // Arrange
        const { mock: communityComponent, findCommunityById } = givenCommunityComponent()
        const { mock: urlBuilder, getInvitationToken } = givenUrlBuilder()
        const context = givenGetServerSidePropsContext()

        getInvitationToken.mockImplementation(() => (new InvitationToken("communityKey")))
        findCommunityById.mockImplementation(() => null)


        // Act
        const props = await getServerSidePropsImpl(
            context,
            communityComponent(),
            urlBuilder()
        )

        // Assert
        expect(findCommunityById).toBeCalledWith("communityKey")
        expect(props).toEqual({
            props: {
                error: "Cant' find community"
            }
        })
    })
})