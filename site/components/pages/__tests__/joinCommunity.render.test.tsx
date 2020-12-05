import renderer = require("react-test-renderer")
import React from "react"
import Page from "../../../../site/pages/join/[JoinConfirmationToken]"

export default describe("joinCommunity render test", () => {
    test("render", () => {
        // Arrange
        const props = {
            alreadyJoined: undefined,
            communityTitle: "communityTitle",
            error: undefined
        }

        // Act
        const tree = renderer.create(<Page {...props}/>).toJSON()

        // Assert
        expect(tree).toMatchSnapshot()
    })

    test("render alreadyJoined", () => {
        // Arrange
        const props = {
            alreadyJoined: true,
            communityTitle: "communityTitle",
            error: undefined
        }

        // Act
        const tree = renderer.create(<Page {...props}/>).toJSON()

        // Assert
        expect(tree).toMatchSnapshot()
    })

    test("render error", () => {
        // Arrange
        const props = {
            alreadyJoined: true,
            communityTitle: "communityTitle",
            error: "error"
        }

        // Act
        const tree = renderer.create(<Page {...props}/>).toJSON()

        // Assert
        expect(tree).toMatchSnapshot()
    })
})