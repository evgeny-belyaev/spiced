import { Matches } from "../database/types"

export interface IMatcher {
    getTimeSpanId(utc: number): number
    getNextTimeSpanId(utc: number): number
    saveMatches(matches: Matches, communityId: string, timeSpanId: string): Promise<void>
    calculateMatch(communityId: string, timeSpanId: string, applicantsIds: string[]): Promise<Matches>
}