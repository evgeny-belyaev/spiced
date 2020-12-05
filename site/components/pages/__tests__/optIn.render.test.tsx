import renderer = require("react-test-renderer")
import React from "react"
import Page from "../../../../site/pages/optin/[OptInToken]"

export default describe("optIn render test", () => {
    test("render optIn Yes", () => {
        // Arrange
        const props = {
            optIn: true,
            error: undefined
        }

        // Act
        const tree = renderer.create(<Page {...props}/>).toJSON()

        // Assert
        expect(tree).toMatchSnapshot()
    })

    test("render optIn No", () => {
        // Arrange
        const props = {
            optIn: true,
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
            optIn: true,
            error: "error"
        }

        // Act
        const tree = renderer.create(<Page {...props}/>).toJSON()

        // Assert
        expect(tree).toMatchSnapshot()
    })
})