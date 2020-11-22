import { callGracefully } from "../utils"

export default describe("utils", () => {
    test("callGracefully positive", async () => {
        // Arrange
        const what = jest.fn()
        const isSuccess = jest.fn((data) => (data === "data"))
        const sl = jest.fn(() => (Promise.resolve()))

        let n = 0

        what.mockImplementation(() => {
            if (n++ === 5) {
                return "data"
            } else {
                return ""
            }
        })

        // Act
        const result: unknown = await callGracefully(
            what,
            isSuccess,
            sl
        )

        // Assert
        expect(result).toEqual("data")
        expect(isSuccess).toHaveBeenCalledTimes(6)
        expect(what).toHaveBeenCalledTimes(6)
        expect(sl).toHaveBeenCalledTimes(5)
    })

    test("callGracefully negative", async () => {
        // Arrange
        const what = jest.fn(() => "")
        const isSuccess = jest.fn((data) => (data === "data"))
        const sl = jest.fn(() => (Promise.resolve()))

        // Act
        const result: unknown = await callGracefully(
            what,
            isSuccess,
            sl
        )

        // Assert
        expect(result).toEqual(null)
        expect(isSuccess).toHaveBeenCalledTimes(11)
        expect(what).toHaveBeenCalledTimes(11)
        expect(sl).toHaveBeenCalledTimes(10)
    })
})