export type TemplateContent = {
    name: string,
    content: string
}

type To = {
    email: string,
    name?: string,
    type?: "to" | "cc" | "bcc"
}

export type Template = {
    template_name: string,
    template_content: TemplateContent[],
    message: {
        subject: string,
        from_email: string,
        to: To[]
    }
}

export type SendResult = {
    email: string,
    status: string,
    reject_status: string,
    _id: string
}

export type MailchimpTx = {
    users: {
        ping: () => Promise<string>
    },
    messages: {
        sendTemplate: (body: Template) => Promise<SendResult[]>
    }
}

export type Mailchimp = {
    setConfig: (config: unknown) => void,
    ping: {
        get: () => Promise<string>
    },
    lists: {
        addListMember: (listId: string, body: unknown) => Promise<{ id: string }>
        getListMember: (listId: string, subscriberHash: string) => unknown
    }
}