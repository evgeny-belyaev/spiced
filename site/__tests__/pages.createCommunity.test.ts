import { getServerSidePropsImpl } from "../pages/createCommunity/[encryptedToken]"
import { givenCommunityComponent, givenGetServerSidePropsContext } from "../components/testUtils"


export default describe("Pages: createCommunity", () => {
    test("getServerSideProps", async () => {
        // Arrange
        const { mock, createCommunity } = givenCommunityComponent()

        // Act
        const context = givenGetServerSidePropsContext({
            encryptedToken: "asd"
        })

        await getServerSidePropsImpl(
            context,
            mock()
        )

        // Assert
        expect(createCommunity).toBeCalledWith("asd")
    })
})