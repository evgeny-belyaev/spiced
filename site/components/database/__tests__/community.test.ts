import { createCommunity, getCommunityById } from "../utils"

export default describe("community", () => {
    test("should create community", async () => {
        // Act
        const communityId = await createCommunity("title", "ownerId")

        // Assert
        expect(communityId).not.toBeNull()
        expect(communityId?.length).toBeGreaterThan(0)
    })

    test("getCommunityById", async () => {
        // Arrange
        const communityId = await createCommunity("title", "ownerId")

        // Act
        const community = await getCommunityById(communityId)

        // Assert
        expect(community).toEqual({
            title: "title",
            ownerId: "ownerId"
        })
    })
})
