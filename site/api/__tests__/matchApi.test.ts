import { createMocks } from "node-mocks-http"
import { CommunityComponent } from "../../components/logic/CommunityComponent"
import { givenCommunityComponent, givenMatcher } from "../../components/testUtils"
import { MatchApi } from "../matchApi"
import { IMatcher } from "../../components/logic/IMatcher"

function givenApi(communityComponent: CommunityComponent, matcher: IMatcher) {
    return new MatchApi(communityComponent, matcher)
}

export default describe("MatchApi", () => {

    test("match for one community", async () => {
        // Arrange
        const { mock: communityComponent, monday } = givenCommunityComponent()
        const { mock: matcher, getTimeSpanId } = givenMatcher()

        getTimeSpanId.mockImplementation(() => "timeSpanId")

        const api = givenApi(
            communityComponent(),
            matcher()
        )

        const { req, res } = createMocks({
            method: "POST",
            query: {
                communityId: "communityId"
            },
            body: {

            }
        })

        // Act
        await api.handler(req, res)

        // Assert
        expect(res.statusCode).toEqual(200)
        expect(monday).toBeCalledWith("timeSpanId", "communityId")
    })

    test("match for all communities", async () => {
        // Arrange
        const { mock: communityComponent, monday } = givenCommunityComponent()
        const { mock: matcher, getTimeSpanId } = givenMatcher()

        getTimeSpanId.mockImplementation(() => "timeSpanId")

        const api = givenApi(
            communityComponent(),
            matcher()
        )

        const { req, res } = createMocks({
            method: "POST",
            query: {
                communityId: "all"
            },
            body: {

            }
        })

        // Act
        await api.handler(req, res)

        // Assert
        expect(res.statusCode).toEqual(200)
        expect(monday).toBeCalledWith("timeSpanId", "")
    })

    test("no parameter", async () => {
        // Arrange
        const { mock: communityComponent, monday } = givenCommunityComponent()
        const { mock: matcher, getTimeSpanId } = givenMatcher()

        getTimeSpanId.mockImplementation(() => "timeSpanId")

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
        expect(monday).toHaveBeenCalledTimes(0)
    })
})
