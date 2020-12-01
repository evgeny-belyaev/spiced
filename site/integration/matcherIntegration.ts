import { IMatcher } from "../components/logic/IMatcher"
import { Matches } from "../components/database/types"
import { Matcher } from "../components/logic/matcher"
import { SpicedDatabase } from "../components/database/spicedDatabase"

const realMatcher = new Matcher(new SpicedDatabase())

export class MatcherIntegration implements IMatcher {
    getNextTimeSpanId(utc: number): number {
        return utc
    }

    getTimeSpanId(utc: number): number {
        return utc
    }

    async saveMatches(matches: Matches, communityId: string, timeSpanId: string): Promise<void> {
        await realMatcher.saveMatches(matches, communityId, timeSpanId)
    }

    async calculateMatch(communityId: string, timeSpanId: string, applicantsIds: string[]): Promise<Matches> {
        return await realMatcher.calculateMatch(communityId, timeSpanId, applicantsIds)
    }
}