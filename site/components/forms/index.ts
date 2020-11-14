import { Forms } from "../constants"
import { Fetcher } from "../../api/fetcher"

type Field = {
    id: string,
    type: string,
    title: string,
    description: string
}

export type FormAnswer = {
    field: {
        id: string,
        type: string,
        title: string,
        ref: string
    },
    type: "choice" | "choices" | "date" | "email" | "url" | "file_url" | "number" | "boolean" | "text" | "payment",
    choice?: {
        label: string,
        other: string
    },
    choices?: {
        labels: string[],
        other: string
    },
    text?: string,
    url?: string,
    email?: string,
    phone_number?: string,
    number?: number,
    boolean?: boolean,
    date?: string
}

type Item = {
    response_id: string,
    definition: {
        fields: Field[]
    },
    answers: FormAnswer[],
    calculated: {
        score: number
    }
}

type FormResponse = {
    total_items: number,
    page_count: number,
    _links: {
        metrics: string,
        reports: string
    },
    items: Item[]
}

export class FormsApi {
    private fetcher: Fetcher

    constructor(fetcher: Fetcher) {
        this.fetcher = fetcher
    }

    public getAnswerById(answers: FormAnswer[], fieldId: string): FormAnswer {
        return answers.filter((a) => a.field.id === fieldId)[0]
    }

    async getAnswers(formId: string, responseId: string): Promise<FormAnswer[]> {
        const responsesUrl = Forms.getResponsesUrl(formId, [responseId])
        const response = await this.fetcher.get(responsesUrl)

        if (response) {
            const formResponse = await response.json() as FormResponse
            const firstItem = formResponse.items[0]

            return firstItem.answers
        } else {
            return []
        }
    }
}