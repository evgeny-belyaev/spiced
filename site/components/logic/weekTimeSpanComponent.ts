import moment from "moment"
import { ITimeSpanComponent } from "./ITimeSpanComponent"

export class WeekTimeSpanComponent implements ITimeSpanComponent {
    getTimeSpanId(utc: number): number {
        const lastMonday = moment(utc).isoWeekday(1).toDate()
        lastMonday.setUTCHours(0, 0, 0, 0)

        return lastMonday.getTime()
    }

    getNextTimeSpanId(utc: number): number {
        const lastMonday = moment(utc).isoWeekday(1).add(1, "week").toDate()
        lastMonday.setUTCHours(0, 0, 0, 0)

        return lastMonday.getTime()
    }
}