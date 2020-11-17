import { givenCommunityComponent, givenGetServerSidePropsContext } from "../../../testUtils"
import { getServerSidePropsImpl } from "../"


export default describe("getServerSidePropsImpl", () => {
    test("should return props", async () => {
        // Arrange
        const { mock: communityComponent, findCommunityByEncryptedToken } = givenCommunityComponent()
        const context = givenGetServerSidePropsContext({
            encryptedToken: "asd"
        })

        findCommunityByEncryptedToken.mockImplementation(() => ({
            title: "title"
        }))

        // Act
        const props = await getServerSidePropsImpl(
            context,
            communityComponent()
        )

        // Assert
        expect(findCommunityByEncryptedToken).toBeCalledWith("asd")
        expect(props).toEqual({
            props: {
                communityTitle: "title"
            }
        })
    })

    test("should return error when community not found", async () => {
        // Arrange
        const { mock: communityComponent, findCommunityByEncryptedToken } = givenCommunityComponent()
        const context = givenGetServerSidePropsContext({
            encryptedToken: "asd"
        })

        findCommunityByEncryptedToken.mockImplementation(() => null)

        // Act
        const props = await getServerSidePropsImpl(
            context,
            communityComponent()
        )

        // Assert
        expect(findCommunityByEncryptedToken).toBeCalledWith("asd")
        expect(props).toEqual({
            props: {
                error: "Cant' find community"
            }
        })
    })
})