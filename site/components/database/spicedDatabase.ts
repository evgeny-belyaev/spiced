import { Logger } from "../logger"
import { getFirebaseDatabase } from "./dataProvider"
import { Community } from "./types"
import { BaseError } from "../baseError"

const log = new Logger("database")

export class EntityAlreadyExists extends BaseError {
    constructor(public message: string) {
        super()
    }
}


export class SpicedDatabase {
    private communitiesById = () => "communities/byId"
    private communitiesIdByTypeFormResponseId = () => "communities/byTypeFormResponseId"

    private communityById = (communityId: string) => `${this.communitiesById()}/${communityId}`
    private communityIdByTypeFormResponseId = (responseId: string) => `${this.communitiesIdByTypeFormResponseId()}/${responseId}`

    private ref = (path: string) => getFirebaseDatabase().ref(path)

    async createCommunity(community: Community): Promise<string> {
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

    async getCommunityById(communityId: string): Promise<Community | null> {
        if (!communityId) {
            return null
        }

        const dataSnapshot = await this.ref(this.communityById(communityId))
            .once("value")

        return <Community>dataSnapshot.val()
    }

    async getCommunityIdByTypeFormResponseId(typeFormResponseId: string): Promise<string | null> {
        const dataSnapshot = await this.ref(this.communityIdByTypeFormResponseId(typeFormResponseId)).once("value")

        return dataSnapshot.val() as string
    }
}
