import { getDatabase } from "./dataProvider";
import { Community } from "./types";

export async function createCommunity(title: string, ownerId: String): Promise<string> {
    const newCommunityRef = await getDatabase().ref("communities/list").push({
        title, ownerId
    });

    return newCommunityRef.key!;
}

export const getCommunityById = async (communityId: String): Promise<Community> => {
    const s = await getDatabase().ref(`communities/list/${communityId}`).once("value")
    return s.val()
}