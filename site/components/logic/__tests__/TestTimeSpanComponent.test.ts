import { TestTimeSpanComponent } from "../testTimeSpanComponent"

export default describe("TestTimeSpanComponent", () => {
    test("getTimeSpanId", () => {
        // Arrange
        const testTimeSpanComponent = new TestTimeSpanComponent()

        function check(utc: number, expected: number) {
            const result = testTimeSpanComponent.getTimeSpanId(utc)
            expect(result).toEqual(expected)
        }

        const now1200 = Date.UTC(2020, 10, 23, 12, 0, 0, 0)
        const now1210 = Date.UTC(2020, 10, 23, 12, 10, 0, 0)

        // Assert
        check(Date.UTC(2020, 10, 23, 12, 0, 10, 123), now1200)
        check(Date.UTC(2020, 10, 23, 12, 1, 10, 123), now1200)
        check(Date.UTC(2020, 10, 23, 12, 10, 10, 123), now1210)
    })

    test("getNextTimeSpanId", () => {
        // Arrange
        const testTimeSpanComponent = new TestTimeSpanComponent()

        function check(utc: number, expected: number) {
            const result = testTimeSpanComponent.getNextTimeSpanId(utc)
            expect(result).toEqual(expected)
        }

        const now1200 = Date.UTC(2020, 10, 23, 12, 0, 0, 0)
        const now1210 = Date.UTC(2020, 10, 23, 12, 10, 0, 0)
        const now1220 = Date.UTC(2020, 10, 23, 12, 20, 0, 0)

        // Assert
        check(Date.UTC(2020, 10, 23, 11, 59, 10, 123), now1200)
        check(Date.UTC(2020, 10, 23, 12, 0, 10, 123), now1210)
        check(Date.UTC(2020, 10, 23, 12, 1, 10, 123), now1210)
        check(Date.UTC(2020, 10, 23, 12, 10, 10, 123), now1220)
    })
})