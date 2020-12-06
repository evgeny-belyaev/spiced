import { SpicedDatabasePathHelper } from "../spicedDatabasePathHelper"

export default describe("SpicedDatabasePathHelper", () => {
    test("path", () => {
        // Arrange
        const pathHelper = new SpicedDatabasePathHelper()

        // Act Assert
        expect(pathHelper.memberByCommunityIdByUserId("COMMUNITYID", "USERID")).toEqual("test/members/byCommunityId/COMMUNITYID/byUserId/USERID")
        expect(pathHelper.membersByCommunityId("COMMUNITYID")).toEqual("test/members/byCommunityId/COMMUNITYID/byUserId")

        expect(pathHelper.userByEmail("email")).toEqual("test/users/byEmail/email")

        expect(pathHelper.communitiesIds()).toEqual("test/communities/ids")
        expect(pathHelper.communityId("COMMUNITYID")).toEqual("test/communities/ids/COMMUNITYID")

        expect(pathHelper.communitiesById()).toEqual("test/communities/byId")
        expect(pathHelper.communitiesIdByTypeFormResponseId()).toEqual("test/communities/byTypeFormResponseId")

        expect(pathHelper.communityLastIdSync()).toEqual("test/communities/lastId")

        expect(pathHelper.communityById("COMMUNITYID")).toEqual("test/communities/byId/COMMUNITYID")
        expect(pathHelper.communityIdByTypeFormResponseId("RESPONSEID")).toEqual("test/communities/byTypeFormResponseId/RESPONSEID")

        expect(pathHelper.matchedBeforeUser("USERID", "MATCHEDUSERID", "communityId")).toEqual("test/matched/byCommunityId/communityId/byUserId/USERID/MATCHEDUSERID")
        expect(pathHelper.matchedBeforeUsersList("USERID", "MATCHEDUSERID")).toEqual("test/matched/byCommunityId/MATCHEDUSERID/byUserId/USERID")

        expect(pathHelper.matches("TIMESPANID", "COMMUNITYID")).toEqual("test/matches/byTimeSpanId/TIMESPANID/byCommunityId/COMMUNITYID")

        expect(pathHelper.matchedCommunity("TIMESPANID", "COMMUNITYID")).toEqual("test/matches/byTimeSpanId/TIMESPANID/communityIds/COMMUNITYID")
        expect(pathHelper.matchedCommunitiesIds("TIMESPANID")).toEqual("test/matches/byTimeSpanId/TIMESPANID/communityIds")

        expect(pathHelper.optInCommunities("TIMESPANID")).toEqual("test/optIns/byTimeSpanId/TIMESPANID/communitiesIds")
        expect(pathHelper.optInCommunitiesIds("TIMESPANID", "COMMUNITYID")).toEqual("test/optIns/byTimeSpanId/TIMESPANID/communitiesIds/COMMUNITYID")
        expect(pathHelper.optIn("TIMESPANID", "COMMUNITYID", "USERID")).toEqual("test/optIns/byTimeSpanId/TIMESPANID/byCommunityId/COMMUNITYID/byUserId/USERID")
        expect(pathHelper.optInUsers("TIMESPANID", "COMMUNITYID")).toEqual("test/optIns/byTimeSpanId/TIMESPANID/byCommunityId/COMMUNITYID/byUserId")
    })
})