import { getServerSidePropsImpl } from "../pages/createCommunity/[communityCreationToken]"
import { givenCommunityComponent, givenGetServerSidePropsContext } from "../components/testUtils"


export default describe("Pages: createCommunity", () => {
    test("getServerSideProps", async () => {
        // Arrange
        const { mock, createCommunity } = givenCommunityComponent()

        // Act
        const context = givenGetServerSidePropsContext({
            communityCreationToken: "asd"
        })

        await getServerSidePropsImpl(
            context,
            mock()
        )

        // Assert
        expect(createCommunity).toBeCalledWith("asd")
    })
})