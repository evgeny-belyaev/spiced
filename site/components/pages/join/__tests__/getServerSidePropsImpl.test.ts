import { givenCommunityComponent, givenGetServerSidePropsContext } from "../../../testUtils"
import { getServerSidePropsImpl } from "../index"


export default describe("getServerSidePropsImpl", () => {
    test("should return props", async () => {
        // Arrange
        const { mock: communityComponent, joinCommunityByEncryptedToken } = givenCommunityComponent()
        const context = givenGetServerSidePropsContext({
            joinToken: "asd"
        })

        joinCommunityByEncryptedToken.mockImplementation(() => ({
            title: "title"
        }))

        // Act
        const props = await getServerSidePropsImpl(
            context,
            communityComponent()
        )

        // Assert
        expect(joinCommunityByEncryptedToken).toBeCalledWith("asd")
        expect(props).toEqual({
            props: {
                communityTitle: "title"
            }
        })
    })
})