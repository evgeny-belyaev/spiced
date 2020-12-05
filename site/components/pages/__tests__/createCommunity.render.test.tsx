import renderer = require("react-test-renderer")
import React from "react"
import Page from "../../../../site/pages/createCommunity/[CreateCommunityConfirmationToken]"

export default describe("createCommunity render test", () => {
    test("[CreateCommunityConfirmationToken].tsx", () => {
        // Arrange
        const props = {
            communityTitle: "communityTitle",
            communityInvitationLink: "communityInvitationLink",
            alreadyExist: false,
            error: undefined
        }

        // Act
        const tree = renderer.create(<Page {...props}/>).toJSON()

        // Assert
        expect(tree).toMatchSnapshot()
    })

    test("[CreateCommunityConfirmationToken].tsx already exists", () => {
        // Arrange
        const props = {
            communityTitle: "communityTitle",
            communityInvitationLink: "communityInvitationLink",
            alreadyExist: true,
            error: undefined
        }

        // Act
        const tree = renderer.create(<Page {...props}/>).toJSON()

        // Assert
        expect(tree).toMatchSnapshot()
    })

    test("[CreateCommunityConfirmationToken].tsx error", () => {
        // Arrange
        const props = {
            communityTitle: "communityTitle",
            communityInvitationLink: "communityInvitationLink",
            alreadyExist: true,
            error: "asdas"
        }

        // Act
        const tree = renderer.create(<Page {...props}/>).toJSON()

        // Assert
        expect(tree).toMatchSnapshot()
    })
})