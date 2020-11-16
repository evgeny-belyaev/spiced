import { FormAnswer } from "./types"

export class FormsUtils {
    public getAnswerById(answers: FormAnswer[], fieldId: string): FormAnswer | null {
        const filtered = answers.filter((a) => a.field.id === fieldId)

        return filtered && filtered.length == 1 ? filtered[0] : null
    }

    public getText(answer: FormAnswer | null): string {
        if (answer === null) {
            return ""
        } else {
            return answer.text === undefined ? "" : answer.text
        }
    }

    public getUrl(answer: FormAnswer | null): string {
        if (answer === null) {
            return ""
        } else {
            return answer.url === undefined ? "" : answer.url
        }
    }

    public getPhoneNumber(answer: FormAnswer | null): string {
        if (answer === null) {
            return ""
        } else {
            return answer.phone_number === undefined ? "" : answer.phone_number
        }
    }

    public getEmail(answer: FormAnswer | null): string {
        if (answer === null) {
            return ""
        } else {
            return answer.email === undefined ? "" : answer.email
        }
    }
}