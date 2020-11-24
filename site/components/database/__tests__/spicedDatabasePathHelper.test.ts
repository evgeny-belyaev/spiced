import { SpicedDatabasePathHelper } from "../spicedDatabasePathHelper"

export default describe("SpicedDatabasePathHelper", () => {
    test("path", () => {
        // Arrange
        const pathHelper = new SpicedDatabasePathHelper()

        // Act Assert
        expect(pathHelper.memberByCommunityIdByUserId("communityId", "userId")).toEqual("v1/members/byCommunityId/communityId/byUserId/userId")
        expect(pathHelper.membersByCommunityId("communityId")).toEqual("v1/members/byCommunityId/communityId/byUserId")

        expect(pathHelper.userByEmail("email")).toEqual("v1/users/byEmail/email")

        expect(pathHelper.communitiesById()).toEqual("v1/communities/byId")
        expect(pathHelper.communitiesIdByTypeFormResponseId()).toEqual("v1/communities/byTypeFormResponseId")

        expect(pathHelper.communityById("communityId")).toEqual("v1/communities/byId/communityId")
        expect(pathHelper.communityIdByTypeFormResponseId("responseId")).toEqual("v1/communities/byTypeFormResponseId/responseId")

        expect(pathHelper.matchedBeforeUser("userId", "matchedUserId", "communityId")).toEqual("v1/matched/byCommunityId/communityId/byUserId/userId/matchedUserId")
        expect(pathHelper.matchedBeforeUsersList("userId", "matchedUserId")).toEqual("v1/matched/byCommunityId/matchedUserId/byUserId/userId")

        expect(pathHelper.matches("timeSpanId", "communityId")).toEqual("v1/matches/byTimeSpanId/timeSpanId/byCommunityId/communityId")
    })
})