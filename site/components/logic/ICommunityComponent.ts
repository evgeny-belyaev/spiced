import { Community, Matches } from "../database/types"
import { CreateCommunityResult } from "./CommunityComponent"

export interface ICommunityComponent {
    sendJoinCommunityConfirmationEmail(formResponseId: string, email: string): Promise<void>

    sendCreateCommunityConfirmationEmail(formResponseId: string, email: string): Promise<void>

    findCommunityById(communityId: string): Promise<Community | null>

    createCommunity(formsResponseId: string): Promise<CreateCommunityResult>

    joinCommunity(communityId: string, formResponseId: string): Promise<Community | null>

    monday(now: Date): Promise<NodeJS.Dict<Matches>>
}