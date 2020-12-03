export interface ITimeSpanComponent {
    getTimeSpanId(utc: number): number

    getNextTimeSpanId(utc: number): number
}