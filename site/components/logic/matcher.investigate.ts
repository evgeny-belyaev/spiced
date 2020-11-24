import { SpicedDatabase } from "../database/spicedDatabase"
import { Matcher } from "./matcher"
import { givenRandomString } from "../testUtils"
import { shuffleArray } from "../../api/utils"

async function investigate () {
    // Arrange
    const spicedDatabase = new SpicedDatabase()
    const matcher = new Matcher(spicedDatabase)
    const communityId1 = givenRandomString(10) + "communityId1"
    const NUMBER = 100

    function givenApplicantsIds (n: number): string[] {
        return Array.from(Array(n).keys()).map((el) => `${el}`)
    }

    const applicantsIds = givenApplicantsIds(NUMBER)

    // Act
    let matches, i
    for (i = 0; i < 1; i++) {
        const timeSpanId = givenRandomString(10) + `timeSpanId${i}`

        matches = await matcher.calculateMatch(communityId1, timeSpanId,
            // applicantsIds
            shuffleArray(applicantsIds)
        )

        if (Object.keys(matches).length === 0) {
            break
        }

        await matcher.saveMatches(matches, communityId1, timeSpanId)
    }

    let ii = 0
    for (const userId of applicantsIds) {
        const previousMatches = await spicedDatabase.getPreviouslyMatched(userId, communityId1)
        const n = Object.keys(previousMatches).length
        console.table(`${ii++} User ${userId} has ${n} matches`)
    }
}

void investigate()