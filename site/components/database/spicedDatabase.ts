import { Logger } from "../logger"
import { getFirebaseDatabase } from "./dataProvider"
import {
    CommunitiesIds,
    Community,
    MatchedCommunities,
    Matches,
    Members,
    PreviousMatches,
    User,
    UsersIds
} from "./types"
import * as crypto from "crypto"
import { SpicedDatabasePathHelper } from "./spicedDatabasePathHelper"
import { EntityAlreadyExists } from "./entityAlreadyExists"

const log = new Logger("database")

export class SpicedDatabase {
    private path = new SpicedDatabasePathHelper()

    private ref = async (path: string) => (await getFirebaseDatabase()).ref(path)
    private value = async <T>(path: string): Promise<T> => {
        const ref = await this.ref(path)
        return (await ref.once("value")).val() as T
    }


    private set = async <T>(path: string, value: T): Promise<void> => {
        const ref = await this.ref(path)
        await ref.set(value)
    }

    private sha256 = (data: string) => crypto.createHash("sha256").update(data).digest("hex")

    async createCommunity(community: Community): Promise<string> {
        log.debug("createCommunity", community)
        const alreadyExists = await this.getCommunityIdByTypeFormResponseId(community.typeFormResponseId) !== null

        if (alreadyExists) {
            throw new EntityAlreadyExists(`Community with ${community.typeFormResponseId} already exists`)
        }

        const ref = await this.ref(this.path.communitiesById())
        const newCommunityRef = await ref.push(community)

        const communityId = newCommunityRef.key!

        await this.set(this.path.communityIdByTypeFormResponseId(community.typeFormResponseId), communityId)
        await this.set(this.path.communityId(communityId), true)

        return communityId
    }

    async getCommunityById(communityId: string): Promise<Community | null> {
        if (!communityId) {
            return null
        }

        return this.value(this.path.communityById(communityId))
    }

    async getCommunitiesIds(): Promise<CommunitiesIds> {
        return await this.value(this.path.communitiesIds())
    }

    async getCommunityIdByTypeFormResponseId(typeFormResponseId: string): Promise<string | null> {
        return this.value(this.path.communityIdByTypeFormResponseId(typeFormResponseId))
    }

    async createUser(user: User): Promise<string> {
        const key = this.sha256(user.emailAddress)
        await this.set(this.path.userByEmail(key), user)

        return key
    }

    async getUserById(id: string): Promise<User | null> {
        return await this.value(this.path.userByEmail(id))
    }

    getUserId(email: string): string {
        return this.sha256(email)
    }

    async getUserByEmail(email: string): Promise<User | null> {
        const key = this.getUserId(email)

        return await this.value(this.path.userByEmail(key))
    }

    async createMember(communityId: string, userId: string): Promise<void> {
        await this.set(this.path.memberByCommunityIdByUserId(communityId, userId), true)
    }

    async getMembers(communityId: string): Promise<Members | null> {
        return await this.value(this.path.membersByCommunityId(communityId))
    }

    async getPreviouslyMatched(userId: string, communityId: string): Promise<PreviousMatches> {
        return await this.value(this.path.matchedBeforeUsersList(userId, communityId))
    }

    async setPreviouslyMatched(userId: string, matchedUserId: string, communityId: string, timeSpanId: string): Promise<void> {
        await this.set(this.path.matchedBeforeUser(userId, matchedUserId, communityId),{
            timeSpanId: timeSpanId
        })
    }

    async setMatchedCommunity(communityId: string, timeSpanId: string): Promise<void> {
        await this.set(this.path.matchedCommunity(timeSpanId, communityId), true)
    }

    async getMatchedCommunities(timeSpanId: string): Promise<MatchedCommunities> {
        return await this.value(this.path.matchedCommunitiesIds(timeSpanId))
    }

    async setMatches(communityId: string, timeSpanId: string, matches: Matches): Promise<void> {
        await this.set(this.path.matches(timeSpanId, communityId), matches)
    }

    async getMatches(communityId: string, timeSpanId: string): Promise<Matches> {
        return await this.value(this.path.matches(timeSpanId, communityId))
    }

    async setOptIn(communityId: string, userId: string, timeSpanId: string, optIn: boolean): Promise<void> {
        await this.set(this.path.optIn(timeSpanId, communityId, userId), optIn)

        if (optIn) {
            await this.set(this.path.optInCommunitiesIds(timeSpanId, communityId), true)
        }
    }

    async getOptedInCommunities(timeSpanId: string): Promise<CommunitiesIds | null> {
        return await this.value(this.path.optInCommunities(timeSpanId))
    }

    async getOptedInUsers(timeSpanId: string, communityId: string): Promise<UsersIds | null> {
        return await this.value(this.path.optInUsers(timeSpanId, communityId))
    }
}
