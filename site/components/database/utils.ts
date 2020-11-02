import { getDatabase } from "./dataProvider"
import { Community } from "./types"

export class SpicedDatabase {
    static async createCommunity(title: string, ownerId: string): Promise<string> {
        const newCommunityRef = await getDatabase().ref("communities/list").push({
            title, ownerId
        })

        return newCommunityRef.key!
    }

    static async getCommunityById (communityId: string): Promise<Community> {
        const s = await getDatabase().ref(`communities/list/${communityId}`).once("value")
        return <Community>s.val()
    }
}

