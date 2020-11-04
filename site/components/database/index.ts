import { Logger } from "../logger"
import { getFirebaseDatabase } from "./dataProvider"
import { Community } from "./types"

const log = new Logger("database")


class SpicedDatabase {
    private communitiesList = () => "communities/list"
    private communityById = (communityId: string) => `communities/list${communityId}`

    private ref = (path: string) => getFirebaseDatabase().ref(path)

    async createCommunity(community: Community): Promise<string> {
        log.debug("createCommunity", community)
        const newCommunityRef = await this.ref(this.communitiesList())
            .push(community)

        return newCommunityRef.key!
    }

    async getCommunityById(communityId: string): Promise<Community> {
        const s = await this.ref(this.communityById(communityId))
            .once("value")

        return <Community>s.val()
    }
}

export const spicedDatabase = (): SpicedDatabase => new SpicedDatabase()