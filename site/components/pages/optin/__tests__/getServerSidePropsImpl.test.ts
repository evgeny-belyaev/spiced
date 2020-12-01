import { givenCommunityComponent, givenGetServerSidePropsContext, givenUrlBuilder } from "../../../testUtils"
import { OptInToken } from "../../../urlBuilder"
import { getServerSidePropsImpl } from "../index"

export default describe("getServerSidePropsImpl", () => {
    test("should return props", async () => {
        // Arrange
        const { mock: communityComponent, optIn } = givenCommunityComponent()
        const { mock: urlBuilder, getOptInToken } = givenUrlBuilder()
        const context = givenGetServerSidePropsContext()

        getOptInToken.mockImplementation(() => (new OptInToken("communityId", "timeSpanId", "userId", true)))

        // Act
        const props = await getServerSidePropsImpl(
            context,
            communityComponent(),
            urlBuilder()
        )

        // Assert
        expect(optIn).toBeCalledWith("timeSpanId", "communityId", "userId", true)
        expect(props).toEqual({
            props: {
                optIn: true
            }
        })
    })
})