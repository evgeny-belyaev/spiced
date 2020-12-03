import { SpicedDatabase } from "../database/spicedDatabase"
import { Logger } from "../logger"
import { Matches } from "../database/types"
import { IMatcher } from "./IMatcher"
import { TestTimeSpanComponent } from "./testTimeSpanComponent"


export class Matcher implements IMatcher {
    constructor(private spicedDatabase: SpicedDatabase) {
    }

    private log = new Logger("Matcher")
    private timeSpanComponent = new TestTimeSpanComponent()

    getTimeSpanId(utc: number): number {
        return this.timeSpanComponent.getTimeSpanId(utc)
    }

    getNextTimeSpanId(utc: number): number {
        return this.timeSpanComponent.getNextTimeSpanId(utc)
    }

    async saveMatches(matches: Matches, communityId: string, timeSpanId: string): Promise<void> {
        const keys = Object.keys(matches)

        if (keys.length === 0) {
            return
        }

        await this.spicedDatabase.setMatches(communityId, timeSpanId, matches)
        await this.spicedDatabase.setMatchedCommunity(communityId, timeSpanId)

        for (const userId of keys) {
            const matchedUserId = matches[userId]?.matchedUserId

            if (matchedUserId) {
                await this.spicedDatabase.setPreviouslyMatched(userId, matchedUserId, communityId, timeSpanId)
                await this.spicedDatabase.setPreviouslyMatched(matchedUserId, userId, communityId, timeSpanId)
            }
        }
    }

    async calculateMatch(communityId: string, timeSpanId: string, applicantsIds: string[]): Promise<Matches> {
        const matchedInThisRoundIds: string[] = []
        const result: Matches = {}

        this.log.debug(`Starting match for communityId=${communityId}, timeSpanId=${timeSpanId}, applicantsIds=${JSON.stringify(applicantsIds)}`)

        for (const userId of applicantsIds) {
            if (matchedInThisRoundIds.includes(userId)) {
                this.log.debug(`Matching userId=${userId}. Already matched. Continue.`)
                continue
            }

            const previouslyMatchedDict = await this.spicedDatabase.getPreviouslyMatched(userId, communityId)
            const previouslyMatchedIds = previouslyMatchedDict ? Object.keys(previouslyMatchedDict) : []
            const vacant = applicantsIds
                .filter((id) =>
                    id !== userId &&
                    !matchedInThisRoundIds.includes(id) &&
                    !previouslyMatchedIds.includes(id)
                )

            this.log.debug(`Matching userId=${userId} previouslyMatched=${JSON.stringify(previouslyMatchedIds)} vacant=${JSON.stringify(vacant)}`)

            if (vacant.length !== 0) {
                const m = {
                    first: userId,
                    second: vacant[0]
                }

                /**
                 * Match first with second
                 */
                result[m.first] = {
                    matchedUserId: m.second
                }

                /**
                 * Match second with first as well
                 */
                result[m.second] = {
                    matchedUserId: m.first
                }

                // this.log.debug(`Match is ${JSON.stringify(m)}`)

                matchedInThisRoundIds.push(m.first, m.second)
            } else {
                const m = {
                    first: userId,
                    second: ""
                }

                result[m.first] = {
                    matchedUserId: m.second
                }

                // this.log.debug(`Match is ${JSON.stringify(m)}`)

                break
            }
        }

        if (Object.keys(result).length === 1 && applicantsIds.length > 1) {
            this.log.debug("The community is exhausted")
            return {}
        } else {
            return result
        }
    }
}