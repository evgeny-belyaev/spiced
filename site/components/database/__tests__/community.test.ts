import { SpicedDatabase } from "../spicedDatabase"

export default describe("community", () => {
    test("should create community", async () => {
        // Arrange
        const db = new SpicedDatabase()

        // Act
        const communityId = await db.createCommunity({
            title: "title",
            publicLink: "publicLink",
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

    test("getCommunityById", async () => {
        // Arrange
        const db = new SpicedDatabase()
        const communityId = await db.createCommunity({
            title: "title",
            publicLink: "publicLink",
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
            creator: {
                firstName: "firstName",
                lastName: "lastName",
                website: "website",
                phoneNumber: "phoneNumber",
                emailAddress: "emailAddress"
            }
        })
    })
})
