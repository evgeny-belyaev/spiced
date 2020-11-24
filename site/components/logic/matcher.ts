import { SpicedDatabase } from "../database/spicedDatabase"
import { Logger } from "../logger"
import { Matches } from "../database/types"
import { shuffleArray } from "../../api/utils"


export class Matcher {
    constructor (private spicedDatabase: SpicedDatabase) {
    }

    private log = new Logger("Matcher")

    async saveMatches (matches: Matches, communityId: string, timeSpanId: string): Promise<void> {
        for (const userId of Object.keys(matches)) {
            const matchedUserId = matches[userId]?.second

            if (matchedUserId) {
                await this.spicedDatabase.setPreviouslyMatched(userId, matchedUserId, communityId, timeSpanId)
                await this.spicedDatabase.setPreviouslyMatched(matchedUserId, userId, communityId, timeSpanId)
            }
        }
    }

    async calculateMatch (communityId: string, timeSpanId: string, applicantsIds: string[]): Promise<Matches> {
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

                result[m.first] = {
                    second: m.second
                }

                // this.log.debug(`Match is ${JSON.stringify(m)}`)

                matchedInThisRoundIds.push(m.first, m.second)
            } else {
                const m = {
                    first: userId,
                    second: ""
                }

                result[m.first] = {
                    second: m.second
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