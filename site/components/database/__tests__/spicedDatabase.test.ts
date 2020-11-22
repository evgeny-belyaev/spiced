import { EntityAlreadyExists, SpicedDatabase } from "../spicedDatabase"
import * as crypto from "crypto"
import { givenRandomString } from "../../testUtils"

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
            creator: {
                firstName: "firstName",
                lastName: "lastName",
                website: "website",
                phoneNumber: "phoneNumber",
                emailAddress: "emailAddress"
            }
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
            creator: {
                firstName: "firstName",
                lastName: "lastName",
                website: "website",
                phoneNumber: "phoneNumber",
                emailAddress: "emailAddress"
            }
        })

        void await expect(db.createCommunity({
            title: "title",
            publicLink: "publicLink",
            typeFormResponseId: typeFormResponseId,
            creator: {
                firstName: "firstName",
                lastName: "lastName",
                website: "website",
                phoneNumber: "phoneNumber",
                emailAddress: "emailAddress"
            }
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
            creator: {
                firstName: "firstName",
                lastName: "lastName",
                website: "website",
                phoneNumber: "phoneNumber",
                emailAddress: "emailAddress"
            }
        })

        // Act
        const community = await db.getCommunityById(communityId)

        // Assert
        expect(community).toEqual({
            title: "title",
            publicLink: "publicLink",
            typeFormResponseId: typeFormResponseId,
            creator: {
                firstName: "firstName",
                lastName: "lastName",
                website: "website",
                phoneNumber: "phoneNumber",
                emailAddress: "emailAddress"
            }
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
            creator: {
                firstName: "firstName",
                lastName: "lastName",
                website: "website",
                phoneNumber: "phoneNumber",
                emailAddress: "emailAddress"
            }
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
})
