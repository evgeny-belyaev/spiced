import { Logger } from "../logger"
import { getFirebaseDatabase } from "./dataProvider"
import { CommunitiesIds, Community, MatchedCommunities, Matches, Members, PreviousMatches, User } from "./types"
import * as crypto from "crypto"
import { SpicedDatabasePathHelper } from "./spicedDatabasePathHelper"
import { EntityAlreadyExists } from "./entityAlreadyExists"

const log = new Logger("database")

export class SpicedDatabase {
    private path = new SpicedDatabasePathHelper()

    private ref = (path: string) => getFirebaseDatabase().ref(path)
    private value = async <T> (path: string): Promise<T> =>
        (await this.ref(path).once("value")).val() as T

    private set = async <T> (path: string, value: T): Promise<void> => {
        await this.ref(path).set(value)
    }

    private sha256 = (data: string) => crypto.createHash("sha256").update(data).digest("hex")

    async createCommunity (community: Community): Promise<string> {
        log.debug("createCommunity", community)
        const alreadyExists = await this.getCommunityIdByTypeFormResponseId(community.typeFormResponseId) !== null

        if (alreadyExists) {
            throw new EntityAlreadyExists(`Community with ${community.typeFormResponseId} already exists`)
        }

        const newCommunityRef = await this.ref(this.path.communitiesById())
            .push(community)

        const communityId = newCommunityRef.key!

        await this.ref(this.path.communityIdByTypeFormResponseId(community.typeFormResponseId)).set(communityId)
        await this.ref(this.path.communityId(communityId)).set(true)

        return communityId
    }

    async getCommunityById (communityId: string): Promise<Community | null> {
        if (!communityId) {
            return null
        }

        const dataSnapshot = await this.ref(this.path.communityById(communityId))
            .once("value")

        return <Community>dataSnapshot.val()
    }

    async getCommunitiesIds(): Promise<CommunitiesIds> {
        return await this.value(this.path.communitiesIds())
    }

    async getCommunityIdByTypeFormResponseId (typeFormResponseId: string): Promise<string | null> {
        const dataSnapshot = await this.ref(this.path.communityIdByTypeFormResponseId(typeFormResponseId)).once("value")

        return dataSnapshot.val() as string
    }

    async createUser (user: User): Promise<string> {
        const key = this.sha256(user.emailAddress)
        await this.set(this.path.userByEmail(key), user)

        return key
    }

    async getUserByEmail (email: string): Promise<User| null> {
        const key = this.sha256(email)

        return await this.value(this.path.userByEmail(key))
    }

    async createMember (communityId: string, userId: string): Promise<void> {
        await this.set(this.path.memberByCommunityIdByUserId(communityId, userId), true)
    }

    async getMembers (communityId: string): Promise<Members> {
        return await this.value(this.path.membersByCommunityId(communityId))
    }

    async getPreviouslyMatched (userId: string, communityId: string): Promise<PreviousMatches> {
        return await this.value(this.path.matchedBeforeUsersList(userId, communityId))
    }

    async setPreviouslyMatched (userId: string, matchedUserId: string, communityId: string, timeSpanId: string): Promise<void> {
        await this.ref(this.path.matchedBeforeUser(userId, matchedUserId, communityId)).set({
            timeSpanId: timeSpanId
        })
    }

    async setMatchedCommunity (communityId: string, timeSpanId: string): Promise<void> {
        await this.ref(this.path.matchedCommunity(timeSpanId, communityId)).set(true)
    }

    async getMatchedCommunities (timeSpanId: string): Promise<MatchedCommunities> {
        return await this.value(this.path.matchedCommunitiesIds(timeSpanId))
    }

    async setMatches (communityId: string, timeSpanId: string, matches: Matches): Promise<void> {
        await this.ref(this.path.matches(timeSpanId, communityId)).set(matches)
    }

    async getMatches (communityId: string, timeSpanId: string): Promise<Matches> {
        return await this.value(this.path.matches(timeSpanId, communityId))
    }
}
