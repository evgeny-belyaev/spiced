import { Matcher } from "../matcher"
import { givenRandomString, givenSpicedDatabase } from "../../testUtils"
import { SpicedDatabase } from "../../database/spicedDatabase"
import { shuffleArray } from "../../../api/utils"

function matchesFromArray (arr: string[]) {
    let result = {}

    for (const id of arr) {
        result = {
            ...result,
            [id]: {}
        }
    }

    return result
}

export default describe("Matcher", () => {
    test("first match: simple match", async () => {
        // Arrange
        const { mock: spicedDatabase, getPreviouslyMatched } = givenSpicedDatabase()
        getPreviouslyMatched.mockImplementation(() => ([]))

        const matcher = new Matcher(spicedDatabase())

        // Act
        const match = await matcher.calculateMatch("communityId", "1", [
            "1", "2", "3", "4"
        ])

        // Assert
        expect(match).toEqual({
            "1": {
                second: "2"
            },
            "3": {
                second: "4"
            }
        })
    })

    test("second match: simple match", async () => {
        // Arrange
        const { mock: spicedDatabase, getPreviouslyMatched } = givenSpicedDatabase()
        getPreviouslyMatched.mockImplementation((userId: string) => {
            switch (userId) {
                case "1" :
                    return matchesFromArray(["2"])
                case "2":
                    return matchesFromArray(["1"])
                case "3":
                    return matchesFromArray(["4"])
                case "4":
                    return matchesFromArray(["3"])
                default:
                    return matchesFromArray([])
            }
        })

        const matcher = new Matcher(spicedDatabase())

        // Act
        const match = await matcher.calculateMatch("communityId", "1", [
            "1", "2", "3", "4"
        ])

        // Assert
        expect(match).toEqual({
            "1": {
                second: "3"
            },
            "2": {
                second: "4"
            }
        })
    })


    test("third match: simple match", async () => {
        // Arrange
        const { mock: spicedDatabase, getPreviouslyMatched } = givenSpicedDatabase()
        getPreviouslyMatched.mockImplementation((userId: string) => {
            switch (userId) {
                case "1" :
                    return matchesFromArray(["2", "3"])
                case "2":
                    return matchesFromArray(["1", "4"])
                case "3":
                    return matchesFromArray(["4", "1"])
                case "4":
                    return matchesFromArray(["3", "2"])
                default:
                    return matchesFromArray([])
            }
        })

        const matcher = new Matcher(spicedDatabase())

        // Act
        const match = await matcher.calculateMatch("communityId", "1", [
            "1", "2", "3", "4"
        ])

        // Assert
        expect(match).toEqual({
            "1": {
                second: "4"
            },
            "2": {
                second: "3"
            }
        })
    })

    test("fourth match: simple match. exhausted community", async () => {
        // Arrange
        const { mock: spicedDatabase, getPreviouslyMatched } = givenSpicedDatabase()
        getPreviouslyMatched.mockImplementation((userId: string) => {
            switch (userId) {
                case "1" :
                    return matchesFromArray(["2", "3", "4"])
                case "2":
                    return matchesFromArray(["1", "4", "3"])
                case "3":
                    return matchesFromArray(["4", "1", "2"])
                case "4":
                    return matchesFromArray(["3", "2", "1"])
                default:
                    return matchesFromArray([])
            }
        })

        const matcher = new Matcher(spicedDatabase())

        // Act
        const match = await matcher.calculateMatch("communityId", "1", [
            "1", "2", "3", "4"
        ])

        // Assert
        expect(match).toEqual({})
    })


    test("first match: uneven number of applicants", async () => {
        // Arrange
        const { mock: spicedDatabase, getPreviouslyMatched } = givenSpicedDatabase()
        getPreviouslyMatched.mockImplementation(
            (userId: string, communityId: string, timeSpanId: string) => {
                switch (userId) {
                    case "1":
                        return matchesFromArray([])
                    default:
                        return matchesFromArray([])
                }
            })

        const matcher = new Matcher(spicedDatabase())

        // Act
        const match = await matcher.calculateMatch("communityId", "1", [
            "1", "2", "3", "4", "5"
        ])

        // Assert
        expect(match).toEqual({
            "1": {
                second: "2"
            },
            "3": {
                second: "4"
            },
            "5": {
                second: ""
            }
        })
    })
})