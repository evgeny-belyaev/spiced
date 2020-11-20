export type Field = {
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
export type FormResponse = {
    total_items: number,
    page_count: number,
    _links: {
        metrics: string,
        reports: string
    },
    items: Item[]
}

export type WebHookParams = {
    event_id: string,
    form_response: {
        form_id: string,
        token: string,
        definition: {
            fields: [{
                id: string,
                title: string,
                type: string,
                ref: string
            }]
        },
        answers: [WebHookAnswer]
    }
}

export type WebHookAnswer = {
    type: string,
    text?: string,
    url?: string,
    email?: string,
    phone_number?: string,
    number?: number,
    boolean?: boolean,
    date?: string,
    choice?: {
        label?: string,
        other?: string
    },
    field: {
        id: string,
        type: string,
        ref: string
    }
}
