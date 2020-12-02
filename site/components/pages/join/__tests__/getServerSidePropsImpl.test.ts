import { givenCommunityComponent, givenGetServerSidePropsContext, givenUrlBuilder } from "../../../testUtils"
import { getServerSidePropsImpl } from "../index"
import { JoinConfirmationToken } from "../../../urlBuilder"
import { EntityAlreadyExists } from "../../../database/entityAlreadyExists"


export default describe("getServerSidePropsImpl", () => {
    test("should return props", async () => {
        // Arrange
        const { mock: communityComponent, joinCommunityByEncryptedToken } = givenCommunityComponent()
        const { mock: urlBuilder, getJoinConfirmationToken } = givenUrlBuilder()
        const context = givenGetServerSidePropsContext()

        getJoinConfirmationToken.mockImplementation(() => (new JoinConfirmationToken("communityKey", "a@b.c")))

        joinCommunityByEncryptedToken.mockImplementation(() => ({
            title: "title"
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
                communityTitle: "title"
            }
        })
    })

    test("should return props: already joined", async () => {
        // Arrange
        const { mock: communityComponent, joinCommunityByEncryptedToken } = givenCommunityComponent()
        const { mock: urlBuilder, getJoinConfirmationToken } = givenUrlBuilder()
        const context = givenGetServerSidePropsContext()

        getJoinConfirmationToken.mockImplementation(() => (new JoinConfirmationToken("communityKey", "a@b.c")))

        joinCommunityByEncryptedToken.mockImplementation(() => {
            throw new EntityAlreadyExists("")
        })

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
                error: "You have already joined"
            }
        })
    })
})