import { Community, Matches } from "../database/types"
import { CreateCommunityResult, JoinCommunityResult } from "./CommunityComponent"

export interface ICommunityComponent {
    sendJoinCommunityConfirmationEmail(formResponseId: string, email: string): Promise<void>

    sendCreateCommunityConfirmationEmail(formResponseId: string, email: string): Promise<void>

    findCommunityById(communityId: string): Promise<Community | null>

    createCommunity(formsResponseId: string): Promise<CreateCommunityResult>

    joinCommunity(communityId: string, formResponseId: string, utc: number): Promise<JoinCommunityResult>

    monday(timeSpanId: string): Promise<NodeJS.Dict<Matches>>

    sendOptInRequest(timeSpanId: string): Promise<string>

    optIn(timeSpanId: string, communityId: string, userId: string, optIn: boolean): Promise<void>
}