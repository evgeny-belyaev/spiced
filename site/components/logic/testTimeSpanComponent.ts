import { ITimeSpanComponent } from "./ITimeSpanComponent"
import moment from "moment"

export class TestTimeSpanComponent implements ITimeSpanComponent {
    getNextTimeSpanId(utc: number): number {
        const thisTimeSpanId = this.getTimeSpanId(utc)
        return moment(thisTimeSpanId).add(10, "minute").toDate().getTime()
    }

    getTimeSpanId(utc: number): number {
        const dt = new Date(utc)

        dt.setMinutes(Math.floor(dt.getMinutes() / 10) * 10, 0, 0)

        return dt.getTime()
    }

}