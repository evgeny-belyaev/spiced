import { isTest } from "../../api/utils"

export class SpicedDatabasePathHelper {
    private root = isTest() ? "test" : "v1"

    private byId = "byId"
    private byUserId = "byUserId"
    private byCommunityId = "byCommunityId"
    private byTimeSpanId = "byTimeSpanId"

    memberByCommunityIdByUserId = (communityId: string, userId: string) => `${this.root}/members/${this.byCommunityId}/${communityId}/${this.byUserId}/${userId}`
    membersByCommunityId = (communityId: string) => `${this.root}/members/${this.byCommunityId}/${communityId}/${this.byUserId}`

    userByEmail = (email: string) => `${this.root}/users/byEmail/${email}`

    communityLastIdSync = () => `${this.root}/communities/lastId`

    communitiesIds = () => `${this.root}/communities/ids`
    communityId = (communityId: string) => `${this.root}/communities/ids/${communityId}`

    communitiesById = () => `${this.root}/communities/${this.byId}`
    communitiesIdByTypeFormResponseId = () => `${this.root}/communities/byTypeFormResponseId`

    communityById = (communityId: string) => `${this.communitiesById()}/${communityId}`
    communityIdByTypeFormResponseId = (responseId: string) => `${this.communitiesIdByTypeFormResponseId()}/${responseId}`

    matchedBeforeUser = (userId: string, matchedUserId: string, communityId: string) => `${this.root}/matched/${this.byCommunityId}/${communityId}/${this.byUserId}/${userId}/${matchedUserId}`
    matchedBeforeUsersList = (userId: string, communityId: string) => `${this.root}/matched/${this.byCommunityId}/${communityId}/${this.byUserId}/${userId}`

    matches = (timeSpanId: string, communityId: string) => `${this.root}/matches/${this.byTimeSpanId}/${timeSpanId}/${this.byCommunityId}/${communityId}`

    matchedCommunity = (timeSpanId: string, communityId: string) => `${this.root}/matches/${this.byTimeSpanId}/${timeSpanId}/communityIds/${communityId}`
    matchedCommunitiesIds = (timeSpanId: string) => `${this.root}/matches/${this.byTimeSpanId}/${timeSpanId}/communityIds`

    optInCommunities = (timeSpanId: string) => `${this.root}/optIns/${this.byTimeSpanId}/${timeSpanId}/communitiesIds`
    optInCommunitiesIds = (timeSpanId: string, communityId: string) => `${this.root}/optIns/${this.byTimeSpanId}/${timeSpanId}/communitiesIds/${communityId}`
    optIn = (timeSpanId: string, communityId: string, userId: string) => `${this.root}/optIns/${this.byTimeSpanId}/${timeSpanId}/${this.byCommunityId}/${communityId}/${this.byUserId}/${userId}`
    optInUsers = (timeSpanId: string, communityId: string) => `${this.root}/optIns/${this.byTimeSpanId}/${timeSpanId}/${this.byCommunityId}/${communityId}/${this.byUserId}`

    stats = () => `${this.root}/stat`
}