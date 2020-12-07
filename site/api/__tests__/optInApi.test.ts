import { createMocks } from "node-mocks-http"
import { CommunityComponent } from "../../components/logic/CommunityComponent"
import { givenCommunityComponent, givenMatcher } from "../../components/testUtils"
import { IMatcher } from "../../components/logic/IMatcher"
import { OptInApi } from "../optInApi"

function givenApi(communityComponent: CommunityComponent, matcher: IMatcher) {
    return new OptInApi(communityComponent, matcher)
}

export default describe("OptInApi", () => {

    test("optIn for one community", async () => {
        // Arrange
        const { mock: communityComponent, sendOptInRequest } = givenCommunityComponent()
        const { mock: matcher, getNextTimeSpanId } = givenMatcher()

        getNextTimeSpanId.mockImplementation(() => "nextTimeSpanId")

        const api = givenApi(
            communityComponent(),
            matcher()
        )

        const { req, res } = createMocks({
            method: "POST",
            query: {
                communityId: "communityId"
            },
            body: {}
        })

        // Act
        await api.handler(req, res)

        // Assert
        expect(res.statusCode).toEqual(200)
        expect(sendOptInRequest).toBeCalledWith("nextTimeSpanId", "communityId")
    })

    test("optIn for all communities", async () => {
        // Arrange
        const { mock: communityComponent, sendOptInRequest } = givenCommunityComponent()
        const { mock: matcher, getNextTimeSpanId } = givenMatcher()

        getNextTimeSpanId.mockImplementation(() => "nextTimeSpanId")

        const api = givenApi(
            communityComponent(),
            matcher()
        )

        const { req, res } = createMocks({
            method: "POST",
            query: {
                communityId: "all"
            },
            body: {}
        })

        // Act
        await api.handler(req, res)

        // Assert
        expect(res.statusCode).toEqual(200)
        expect(sendOptInRequest).toBeCalledWith("nextTimeSpanId", "")
    })

    test("no parameter", async () => {
        // Arrange
        const { mock: communityComponent, sendOptInRequest } = givenCommunityComponent()
        const { mock: matcher, getNextTimeSpanId } = givenMatcher()

        getNextTimeSpanId.mockImplementation(() => "nextTimeSpanId")

        const api = givenApi(
            communityComponent(),
            matcher()
        )

        const { req, res } = createMocks({
            method: "POST",
            query: {},
            body: {}
        })

        // Act
        await api.handler(req, res)

        // Assert
        expect(res.statusCode).toEqual(500)
        expect(sendOptInRequest).toHaveBeenCalledTimes(0)
    })
})
