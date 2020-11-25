import { SpicedDatabasePathHelper } from "../spicedDatabasePathHelper"

export default describe("SpicedDatabasePathHelper", () => {
    test("path", () => {
        // Arrange
        const pathHelper = new SpicedDatabasePathHelper()

        // Act Assert
        expect(pathHelper.memberByCommunityIdByUserId("COMMUNITYID", "USERID")).toEqual("v1/members/byCommunityId/COMMUNITYID/byUserId/USERID")
        expect(pathHelper.membersByCommunityId("COMMUNITYID")).toEqual("v1/members/byCommunityId/COMMUNITYID/byUserId")

        expect(pathHelper.userByEmail("email")).toEqual("v1/users/byEmail/email")

        expect(pathHelper.communitiesIds()).toEqual("v1/communities/ids")
        expect(pathHelper.communityId("COMMUNITYID")).toEqual("v1/communities/ids/COMMUNITYID")

        expect(pathHelper.communitiesById()).toEqual("v1/communities/byId")
        expect(pathHelper.communitiesIdByTypeFormResponseId()).toEqual("v1/communities/byTypeFormResponseId")

        expect(pathHelper.communityById("COMMUNITYID")).toEqual("v1/communities/byId/COMMUNITYID")
        expect(pathHelper.communityIdByTypeFormResponseId("RESPONSEID")).toEqual("v1/communities/byTypeFormResponseId/RESPONSEID")

        expect(pathHelper.matchedBeforeUser("USERID", "MATCHEDUSERID", "communityId")).toEqual("v1/matched/byCommunityId/communityId/byUserId/USERID/MATCHEDUSERID")
        expect(pathHelper.matchedBeforeUsersList("USERID", "MATCHEDUSERID")).toEqual("v1/matched/byCommunityId/MATCHEDUSERID/byUserId/USERID")

        expect(pathHelper.matches("TIMESPANID", "COMMUNITYID")).toEqual("v1/matches/byTimeSpanId/TIMESPANID/byCommunityId/COMMUNITYID")

        expect(pathHelper.matchedCommunity("TIMESPANID", "COMMUNITYID")).toEqual("v1/matches/byTimeSpanId/TIMESPANID/communityIds/COMMUNITYID")
        expect(pathHelper.matchedCommunitiesIds("TIMESPANID")).toEqual("v1/matches/byTimeSpanId/TIMESPANID/communityIds")
    })
})