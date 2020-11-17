import { EntityAlreadyExists, SpicedDatabase } from "../spicedDatabase"
import * as crypto from "crypto"

const givenRandomString = () => crypto.randomBytes(20).toString("hex")

export default describe("community", () => {
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
})
