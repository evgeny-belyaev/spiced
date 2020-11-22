import { Logger } from "../logger"
import { getFirebaseDatabase } from "./dataProvider"
import { Community, Members, User } from "./types"
import { BaseError } from "../baseError"
import * as crypto from "crypto"

const log = new Logger("database")

export class EntityAlreadyExists extends BaseError {
    constructor (public message: string) {
        super()
    }
}


export class SpicedDatabase {
    private memberByCommunityIdByUserId = (communityId: string, userId: string) => `members/byCommunityId/${communityId}/byId/${userId}`
    private membersByCommunityId = (communityId: string) => `members/byCommunityId/${communityId}/byId`

    private userByEmail = (email: string) => `users/byEmail/${email}`

    private communitiesById = () => "communities/byId"
    private communitiesIdByTypeFormResponseId = () => "communities/byTypeFormResponseId"

    private communityById = (communityId: string) => `${this.communitiesById()}/${communityId}`
    private communityIdByTypeFormResponseId = (responseId: string) => `${this.communitiesIdByTypeFormResponseId()}/${responseId}`

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

        const newCommunityRef = await this.ref(this.communitiesById())
            .push(community)

        const communityId = newCommunityRef.key!

        await this.ref(this.communityIdByTypeFormResponseId(community.typeFormResponseId)).set(communityId)

        return communityId
    }

    async getCommunityById (communityId: string): Promise<Community | null> {
        if (!communityId) {
            return null
        }

        const dataSnapshot = await this.ref(this.communityById(communityId))
            .once("value")

        return <Community>dataSnapshot.val()
    }

    async getCommunityIdByTypeFormResponseId (typeFormResponseId: string): Promise<string | null> {
        const dataSnapshot = await this.ref(this.communityIdByTypeFormResponseId(typeFormResponseId)).once("value")

        return dataSnapshot.val() as string
    }

    async createUser (user: User): Promise<string> {
        const key = this.sha256(user.emailAddress)
        await this.set(this.userByEmail(key), user)

        return key
    }

    async getUserByEmail (email: string): Promise<User> {
        const key = this.sha256(email)

        return await this.value(this.userByEmail(key))
    }

    async createMember(communityId: string, userId: string): Promise<void> {
        await this.set(this.memberByCommunityIdByUserId(communityId, userId), true)
    }

    async getMembers(communityId: string): Promise<Members> {
        return await this.value(this.membersByCommunityId(communityId))
    }
}
