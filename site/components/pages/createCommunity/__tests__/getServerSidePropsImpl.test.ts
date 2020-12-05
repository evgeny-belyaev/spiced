import { getServerSidePropsImpl } from "../"
import { givenCommunityComponent, givenGetServerSidePropsContext, givenUrlBuilder } from "../../../testUtils"
import { CreateCommunityConfirmationToken } from "../../../urlBuilder"


export default describe("Pages: createCommunity", () => {
    test("getServerSideProps", async () => {
        // Arrange
        const { mock: communityComponent, createCommunity } = givenCommunityComponent()
        const { mock: urlBuilder, getCreateCommunityConfirmationToken } = givenUrlBuilder()

        getCreateCommunityConfirmationToken.mockImplementation(() => (new CreateCommunityConfirmationToken("formsResponseId")))
        createCommunity.mockImplementation(() => ({
            communityInvitationLink: "communityInvitationLink",
            communityTitle: "communityTitle",
            alreadyExist: true
        }))
        // Act
        const context = givenGetServerSidePropsContext({
            communityCreationToken: "asd"
        })

        const result = await getServerSidePropsImpl(
            context,
            communityComponent(),
            urlBuilder()
        )

        // Assert
        expect(createCommunity).toBeCalledWith("formsResponseId")
        expect(result).toEqual({
            props: {
                communityInvitationLink: "communityInvitationLink",
                communityTitle: "communityTitle",
                alreadyExist: true
            }
        })
    })
})