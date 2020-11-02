import { SpicedDatabase } from "../utils"

export default describe("community", () => {
    test("should create community", async () => {
        // Act
        const communityId = await SpicedDatabase.createCommunity("title", "ownerId")

        // Assert
        expect(communityId).not.toBeNull()
        expect(communityId?.length).toBeGreaterThan(0)
    })

    test("getCommunityById", async () => {
        // Arrange
        const communityId = await SpicedDatabase.createCommunity("title", "ownerId")

        // Act
        const community = await SpicedDatabase.getCommunityById(communityId)

        // Assert
        expect(community).toEqual({
            title: "title",
            ownerId: "ownerId"
        })
    })
})
