import { SendResult, TemplateContent } from "./types"

export interface IMailComponent {
    sendTemplate(
        emailAddress: string,
        subject: string,
        from: string,
        templateName: string,
        content: TemplateContent[]): Promise<SendResult[]>
}