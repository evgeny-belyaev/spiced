import { WeekTimeSpanComponent } from "../weekTimeSpanComponent"

export default describe("WeekTimeSpanComponent", () => {
    test("getTimeSpanId", () => {
        // Arrange
        const weekTimeSpanComponent = new WeekTimeSpanComponent()

        function check(utc: number, expected: number) {
            const result = weekTimeSpanComponent.getTimeSpanId(utc)
            expect(result).toEqual(expected)
        }

        const nov23 = Date.UTC(2020, 10, 23, 0, 0, 0, 0)
        const nov30 = Date.UTC(2020, 10, 30, 0, 0, 0, 0)

        // Assert
        check(Date.UTC(2020, 10, 25, 16, 59, 10, 123), nov23)
        check(Date.UTC(2020, 10, 26, 16, 59, 10, 123), nov23)
        check(Date.UTC(2020, 10, 27, 16, 59, 10, 123), nov23)
        check(Date.UTC(2020, 10, 28, 16, 59, 10, 123), nov23)
        check(Date.UTC(2020, 10, 29, 16, 59, 10, 123), nov23)

        check(Date.UTC(2020, 10, 30, 16, 59, 10, 123), nov30)
        check(Date.UTC(2020, 11, 1, 16, 59, 10, 123), nov30)
    })

    test("getNextTimeSpanId", () => {
        // Arrange
        const weekTimeSpanComponent = new WeekTimeSpanComponent()

        function check(utc: number, expected: number) {
            const result = weekTimeSpanComponent.getNextTimeSpanId(utc)
            expect(result).toEqual(expected)
        }

        const nov30 = Date.UTC(2020, 10, 30, 0, 0, 0, 0)
        const dec07 = Date.UTC(2020, 11, 7, 0, 0, 0, 0)

        // Assert
        check(Date.UTC(2020, 10, 25, 16, 59, 10, 123), nov30)
        check(Date.UTC(2020, 10, 26, 16, 59, 10, 123), nov30)
        check(Date.UTC(2020, 10, 27, 16, 59, 10, 123), nov30)
        check(Date.UTC(2020, 10, 28, 16, 59, 10, 123), nov30)
        check(Date.UTC(2020, 10, 29, 16, 59, 10, 123), nov30)

        check(Date.UTC(2020, 10, 30, 16, 59, 10, 123), dec07)
        check(Date.UTC(2020, 11, 1, 16, 59, 10, 123), dec07)
    })

})