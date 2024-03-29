import { callGracefully, paginate } from "../utils"
import { getCurrentEnvironment } from "../../components/constants"

export default describe("utils", () => {
    test("environment", () => {
        // Assert
        expect(getCurrentEnvironment()).toEqual("localTest")
    })

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

    test("paginate", () => {
        // Arrange
        const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]

        // Act
        const result = paginate(a, 3)

        // Assert
        expect(result).toEqual([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [10, 10]
        ])
    })

    test("paginate short", () => {
        // Arrange
        const a = [1, 2]

        // Act
        const result = paginate(a, 3)

        // Assert
        expect(result).toEqual([
            [1, 2]
        ])
    })

    test("paginate empty", () => {
        // Arrange
        const a: number[] = []

        // Act
        const result = paginate(a, 3)

        // Assert
        expect(result).toEqual([])
    })
})