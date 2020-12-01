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
    test("getTimeSpanId", () => {
        // Arrange
        const { mock: spicedDatabase } = givenSpicedDatabase()

        const matcher = new Matcher(spicedDatabase())

        function check(utc: number, expected: number) {
            const result = matcher.getTimeSpanId(utc)
            expect(result).toEqual(expected)
        }

        const nov23 = Date.UTC(2020, 10, 23, 0, 0, 0, 0)
        const nov30 = Date.UTC(2020, 10, 30, 0, 0, 0, 0)

        // Assert
        check(Date.UTC(2020, 10, 25, 16, 59, 10, 123), nov23)
        check(Date.UTC(2020, 10, 26, 16, 59, 10, 123), nov23)
        check(Date.UTC(2020, 10, 27, 16, 59, 10, 123), nov23)
        check(Date.UTC(2020, 10, 28, 16, 59, 10, 123), nov23)
        check(Date.UTC(2020, 10, 29, 16, 59, 10, 123), nov23)

        check(Date.UTC(2020, 10, 30, 16, 59, 10, 123), nov30)
        check(Date.UTC(2020, 11, 1, 16, 59, 10, 123), nov30)
    })

    test("getNextTimeSpanId", () => {
        // Arrange
        const { mock: spicedDatabase } = givenSpicedDatabase()

        const matcher = new Matcher(spicedDatabase())

        function check(utc: number, expected: number) {
            const result = matcher.getNextTimeSpanId(utc)
            expect(result).toEqual(expected)
        }

        const nov30 = Date.UTC(2020, 10, 30, 0, 0, 0, 0)
        const dec07 = Date.UTC(2020, 11, 7, 0, 0, 0, 0)

        // Assert
        check(Date.UTC(2020, 10, 25, 16, 59, 10, 123), nov30)
        check(Date.UTC(2020, 10, 26, 16, 59, 10, 123), nov30)
        check(Date.UTC(2020, 10, 27, 16, 59, 10, 123), nov30)
        check(Date.UTC(2020, 10, 28, 16, 59, 10, 123), nov30)
        check(Date.UTC(2020, 10, 29, 16, 59, 10, 123), nov30)

        check(Date.UTC(2020, 10, 30, 16, 59, 10, 123), dec07)
        check(Date.UTC(2020, 11, 1, 16, 59, 10, 123), dec07)
    })


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