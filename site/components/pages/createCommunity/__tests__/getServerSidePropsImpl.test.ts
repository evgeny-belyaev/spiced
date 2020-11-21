import { getServerSidePropsImpl } from "../"
import { givenCommunityComponent, givenGetServerSidePropsContext, givenUrlBuilder } from "../../../testUtils"
import { CreateCommunityConfirmationToken } from "../../../urlBuilder"


export default describe("Pages: createCommunity", () => {
    test("getServerSideProps", async () => {
        // Arrange
        const { mock: communityComponent, createCommunity } = givenCommunityComponent()
        const { mock: urlBuilder, getCreateCommunityConfirmationToken } = givenUrlBuilder()

        getCreateCommunityConfirmationToken.mockImplementation(() => (new CreateCommunityConfirmationToken("formsResponseId")))

        // Act
        const context = givenGetServerSidePropsContext({
            communityCreationToken: "asd"
        })

        await getServerSidePropsImpl(
            context,
            communityComponent(),
            urlBuilder()
        )

        // Assert
        expect(createCommunity).toBeCalledWith("formsResponseId")
    })
})