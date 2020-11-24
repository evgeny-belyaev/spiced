import { SpicedDatabase } from "../spicedDatabase"
import * as crypto from "crypto"
import { givenRandomString } from "../../testUtils"
import { EntityAlreadyExists } from "../entityAlreadyExists"

export default describe("SpicedDatabase", () => {
    test("createCommunity", async () => {
        // Arrange
        const db = new SpicedDatabase()
        const typeFormResponseId = givenRandomString()

        // Act
        const communityId = await db.createCommunity({
            title: "title",
            publicLink: "publicLink",
            typeFormResponseId: typeFormResponseId,
            creatorUserId: "creatorUserId"
        })

        // Assert
        expect(communityId).not.toBeNull()
        expect(communityId?.length).toBeGreaterThan(0)
    })

    test("createCommunity should not create duplicates", async () => {
        // Arrange
        const db = new SpicedDatabase()
        const typeFormResponseId = givenRandomString()

        // Act
        const communityId1 = await db.createCommunity({
            title: "title",
            publicLink: "publicLink",
            typeFormResponseId: typeFormResponseId,
            creatorUserId: "creatorUserId"

        })

        void await expect(db.createCommunity({
            title: "title",
            publicLink: "publicLink",
            typeFormResponseId: typeFormResponseId,
            creatorUserId: "creatorUserId"
        })).rejects.toEqual(new EntityAlreadyExists(`Community with ${typeFormResponseId} already exists`))

        // Assert
        expect(communityId1).not.toBeNull()
        expect(communityId1?.length).toBeGreaterThan(0)
    })

    test("getCommunityById should return null if community doesn't exits", async () => {
        // Arrange
        const db = new SpicedDatabase()

        // Act
        const community = await db.getCommunityById("UNKNOWN_ID")

        // Assert
        expect(community).toEqual(null)
    })

    test("getCommunityById", async () => {
        // Arrange
        const db = new SpicedDatabase()
        const typeFormResponseId = givenRandomString()

        const communityId = await db.createCommunity({
            title: "title",
            publicLink: "publicLink",
            typeFormResponseId: typeFormResponseId,
            creatorUserId: "creatorUserId"
        })

        // Act
        const community = await db.getCommunityById(communityId)

        // Assert
        expect(community).toEqual({
            title: "title",
            publicLink: "publicLink",
            typeFormResponseId: typeFormResponseId,
            creatorUserId: "creatorUserId"
        })
    })

    test("getCommunityById should return null if no communityId provided", async () => {
        // Arrange
        const db = new SpicedDatabase()

        // Act
        const community = await db.getCommunityById("")

        // Assert
        expect(community).toBeNull()
    })


    test("communitiesIdByTypeFormResponseId should return null when no community created", async () => {
        // Arrange
        const db = new SpicedDatabase()

        // Act
        const result = await db.getCommunityIdByTypeFormResponseId("UNKNOWN_ID")

        // Assert
        expect(result).toEqual(null)
    })

    test("getCommunityIdByTypeFormResponseId", async () => {
        // Arrange
        const db = new SpicedDatabase()
        const typeFormResponseId = givenRandomString()

        const communityId = await db.createCommunity({
            title: "title",
            publicLink: "publicLink",
            typeFormResponseId: typeFormResponseId,
            creatorUserId: "creatorUserId"
        })

        // Act
        const result = await db.getCommunityIdByTypeFormResponseId(typeFormResponseId)

        // Assert
        expect(result).toEqual(communityId)
    })

    test("createUser", async () => {
        // Arrange
        const db = new SpicedDatabase()
        const email = crypto.randomBytes(20).toString("hex") + "@mail.com"
        const key = crypto.createHash("sha256").update(email).digest("hex")

        // Act
        const result = await db.createUser({
            firstName: "firstName",
            lastName: "lastName:",
            emailAddress: email,
            phoneNumber: "phoneNumber",
            website: "website"
        })

        // Assert
        expect(result).toEqual(key)
    })

    test("getUserByEmail", async () => {
        const db = new SpicedDatabase()
        const email = givenRandomString(20) + "@mail.com"
        const user = {
            firstName: "firstName",
            lastName: "lastName:",
            emailAddress: email,
            phoneNumber: "phoneNumber",
            website: "website"
        }

        await db.createUser(user)

        // Act
        const result = await db.getUserByEmail(email)

        // Assert
        expect(result).toEqual(user)
    })

    test("createMember getMembers", async () => {
        // Arrangea
        const db = new SpicedDatabase()
        const communityId = givenRandomString()
        const userId1 = givenRandomString()
        const userId2 = givenRandomString()

        await db.createMember(communityId, userId1)
        await db.createMember(communityId, userId2)

        // Act
        const result = await db.getMembers(communityId)

        // Assert
        expect(Object.keys(result)).toContain(userId1)
        expect(Object.keys(result)).toContain(userId2)

        expect(Object.values(result)).toEqual([true, true])
    })

    test("setPreviouslyMatched", async () => {
        // Arrange
        const db = new SpicedDatabase()
        const userId = givenRandomString(10) + "userId"
        const matchedUserId = givenRandomString(10) + "matchedUserId"
        const communityId = givenRandomString(10) + "communityId"
        const timespanId = givenRandomString(10) + "timespanId"


        // Act Assert
        await expect(db.setPreviouslyMatched(userId, matchedUserId, communityId, timespanId)).resolves.toEqual(undefined)
    })

    test("getPreviouslyMatched", async () => {
        // Arrange
        const db = new SpicedDatabase()
        const userId = givenRandomString(10) + "userId"
        const matchedUserId1 = givenRandomString(10) + "matchedUserId1"
        const matchedUserId2 = givenRandomString(10) + "matchedUserId2"
        const communityId1 = givenRandomString(10) + "communityId1"
        const communityId2 = givenRandomString(10) + "communityId2"
        const timespanId1 = givenRandomString(10) + "timespanId1"
        const timespanId2 = givenRandomString(10) + "timespanId2"

        await db.setPreviouslyMatched(userId, matchedUserId1, communityId1, timespanId1)
        await db.setPreviouslyMatched(userId, matchedUserId2, communityId1, timespanId1)

        // FIXME: This case should be impossible. Handle in logic or in database rules
        // await db.setPreviouslyMatched(userId, matchedUserId2, communityId1, timespanId2)

        // In another community
        await db.setPreviouslyMatched(userId, matchedUserId2, communityId2, timespanId1)

        // Act
        const result = await db.getPreviouslyMatched(userId, communityId1)

        // Assert
        expect(result).toEqual({
            [matchedUserId1]: {
                timeSpanId: timespanId1
            },
            [matchedUserId2]: {
                timeSpanId: timespanId1
            }
        })
    })

    test("setMatches", async () => {
        // Arrange
        const db = new SpicedDatabase()
        const userId1 = givenRandomString(10) + "userId1"
        const userId2 = givenRandomString(10) + "userId2"
        const matchedUserId = givenRandomString(10) + "matchedUserId"
        const communityId = givenRandomString(10) + "communityId"
        const timespanId = givenRandomString(10) + "timespanId"


        const matches = {
            [userId1]: {
                second: matchedUserId
            },
            [userId2]: {
                second: ""
            }
        }

        // Act Assert
        await expect(db.setMatches(communityId, timespanId, matches)).resolves.toEqual(undefined)
    })

    test("getMatches", async () => {
        // Arrange
        const db = new SpicedDatabase()
        const userId1 = givenRandomString(10) + "userId1"
        const userId2 = givenRandomString(10) + "userId2"
        const matchedUserId = givenRandomString(10) + "matchedUserId"
        const communityId = givenRandomString(10) + "communityId"
        const timespanId = givenRandomString(10) + "timespanId"

        const matches = {
            [userId1]: {
                second: matchedUserId
            },
            [userId2]: {
                second: ""
            }
        }
        await db.setMatches(communityId, timespanId, matches)

        // Act
        const result = await db.getMatches(communityId, timespanId)

        // Assert
        expect(result).toHaveProperty(userId1, { second: matchedUserId })
        expect(result).toHaveProperty(userId2, { second: "" })
    })
})
