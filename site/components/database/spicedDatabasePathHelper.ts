export class SpicedDatabasePathHelper {
    private root = "v1"

    private byId = "byId"
    private byUserId = "byUserId"
    private byCommunityId = "byCommunityId"
    private byTimeSpanId = "byTimeSpanId"

    memberByCommunityIdByUserId = (communityId: string, userId: string) => `${this.root}/members/${this.byCommunityId}/${communityId}/${this.byUserId}/${userId}`
    membersByCommunityId = (communityId: string) => `${this.root}/members/${this.byCommunityId}/${communityId}/${this.byUserId}`

    userByEmail = (email: string) => `${this.root}/users/byEmail/${email}`

    communitiesById = () => `${this.root}/communities/${this.byId}`
    communitiesIdByTypeFormResponseId = () => `${this.root}/communities/byTypeFormResponseId`

    communityById = (communityId: string) => `${this.communitiesById()}/${communityId}`
    communityIdByTypeFormResponseId = (responseId: string) => `${this.communitiesIdByTypeFormResponseId()}/${responseId}`

    matchedBeforeUser = (userId: string, matchedUserId: string, communityId: string) => `${this.root}/matched/${this.byCommunityId}/${communityId}/${this.byUserId}/${userId}/${matchedUserId}`
    matchedBeforeUsersList = (userId: string, communityId: string) => `${this.root}/matched/${this.byCommunityId}/${communityId}/${this.byUserId}/${userId}`


    /**
     * List of community ids participating in match in given timeSpanId
     * @param timeSpanId
     */
    matchCommunityIds = (timeSpanId: string) => `${this.root}/matches/${this.byTimeSpanId}/${timeSpanId}/communityIds`

    /**
     * List of matches for given communityId and given timeSpanId
     * @param timeSpanId
     * @param communityId
     */
    matches = (timeSpanId: string, communityId: string) => `${this.root}/matches/${this.byTimeSpanId}/${timeSpanId}/${this.byCommunityId}/${communityId}`

}