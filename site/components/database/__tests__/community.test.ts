import { spicedDatabase } from "../index"

export default describe("community", () => {
    test("should create community", async () => {
        // Act


        const communityId = await spicedDatabase().createCommunity({
            title: "title",
            description: "desc",
            creatorId: "crId"
        })

        // Assert
        expect(communityId).not.toBeNull()
        expect(communityId?.length).toBeGreaterThan(0)
    })

    test("getCommunityById", async () => {
        // Arrange
        const communityId = await spicedDatabase().createCommunity({
            title: "title",
            description: "desc",
            creatorId: "crId"
        })

        // Act
        const community = await spicedDatabase().getCommunityById(communityId)

        // Assert
        expect(community).toEqual({
            title: "title",
            description: "desc",
            creatorId: "crId"
        })
    })
})
