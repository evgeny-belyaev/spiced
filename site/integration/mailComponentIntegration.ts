import { IMailComponent } from "../components/mail/IMailComponent"
import { SendResult, TemplateContent } from "../components/mail/types"
import { Logger } from "../components/logger"

const log = new Logger("MailComponentIntegration")

export class MailComponentIntegration implements IMailComponent {
    async sendTemplate(emailAddress: string, subject: string, from: string, templateName: string, content: TemplateContent[]): Promise<SendResult[]> {

        log.debug(`Sent mail to ${emailAddress}`)

        return [{
            email: emailAddress,
            status: "string",
            reject_status: "string",
            _id: "string"
        }]
    }
}