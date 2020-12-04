import { Matcher } from "../matcher"
import { givenRandomString, givenSpicedDatabase } from "../../testUtils"

function matchesFromArray(arr: string[]) {
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
                matchedUserId: "2"
            },
            "2": {
                matchedUserId: "1"
            },
            "3": {
                matchedUserId: "4"
            },
            "4": {
                matchedUserId: "3"
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
                matchedUserId: "3"
            },
            "3": {
                matchedUserId: "1"
            },
            "2": {
                matchedUserId: "4"
            },
            "4": {
                matchedUserId: "2"
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
                matchedUserId: "4"
            },
            "4": {
                matchedUserId: "1"
            },
            "2": {
                matchedUserId: "3"
            },
            "3": {
                matchedUserId: "2"
            }
        })
    })

    test("Matching shouldn't stop after first looser", async () => {
        // Arrange
        const { mock: spicedDatabase, getPreviouslyMatched } = givenSpicedDatabase()
        getPreviouslyMatched.mockImplementation((userId: string) => {
            switch (userId) {
                case "1" :
                    return matchesFromArray([])
                case "2":
                    return matchesFromArray(["3", "4"])
                case "3":
                    return matchesFromArray(["2", "5"])
                case "4":
                    return matchesFromArray(["2", "5", "6"])
                default:
                    return matchesFromArray([])
            }
        })

        const matcher = new Matcher(spicedDatabase())

        // Act
        // The looser is 3
        const match = await matcher.calculateMatch("communityId", "1", [
            "1", "6", "3", "2", "5"
        ])

        // Assert
        expect(match).toEqual({
            "1": {
                matchedUserId: "6"
            },
            "3": {
                matchedUserId: ""
            },
            "6": {
                matchedUserId: "1"
            },
            "2": {
                matchedUserId: "5"
            },
            "5": {
                matchedUserId: "2"
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
        expect(match).toEqual({
            "1": {
                matchedUserId: ""
            },
            "2": {
                matchedUserId: ""
            },
            "3": {
                matchedUserId: ""
            },
            "4": {
                matchedUserId: ""
            }
        })
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
                matchedUserId: "2"
            },
            "2": {
                matchedUserId: "1"
            },
            "3": {
                matchedUserId: "4"
            },
            "4": {
                matchedUserId: "3"
            },
            "5": {
                matchedUserId: ""
            }
        })
    })

    test("saveMatches. should return if matches are empty", async () => {
        // Arrange
        const { mock: spicedDatabase, setMatches, setMatchedCommunity, setPreviouslyMatched } = givenSpicedDatabase()

        const matcher = new Matcher(spicedDatabase())
        const communityId = givenRandomString(10) + "communityId"
        const timeSpanId = givenRandomString(10) + "timeSpanId"
        const matches = {}

        // Act
        await expect(
            matcher.saveMatches(matches, communityId, timeSpanId)
        ).resolves.toEqual(undefined)

        // Assert
        expect(setMatches).toHaveBeenCalledTimes(0)
        expect(setMatchedCommunity).toHaveBeenCalledTimes(0)
        expect(setPreviouslyMatched).toHaveBeenCalledTimes(0)
    })

    test("saveMatches. should save", async () => {
        // Arrange
        const { mock: spicedDatabase, setMatches, setMatchedCommunity, setPreviouslyMatched } = givenSpicedDatabase()

        const matcher = new Matcher(spicedDatabase())
        const communityId = givenRandomString(10) + "communityId"
        const timeSpanId = givenRandomString(10) + "timeSpanId"
        const matches = {
            "userId1": {
                matchedUserId: "userId2"
            },
            "userId3": {
                matchedUserId: ""
            }
        }

        // Act
        await expect(
            matcher.saveMatches(matches, communityId, timeSpanId)
        ).resolves.toEqual(undefined)

        // Assert
        expect(setMatches).toBeCalledWith(communityId, timeSpanId, matches)
        expect(setMatchedCommunity).toBeCalledWith(communityId, timeSpanId)
        expect(setPreviouslyMatched.mock.calls).toEqual([
            ["userId1", "userId2", communityId, timeSpanId],
            ["userId2", "userId1", communityId, timeSpanId]
        ])
    })
})