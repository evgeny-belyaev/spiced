import { MailChimp } from "../constants"
import { Logger } from "../logger"

declare function require<T>(name: string): T

// eslint-disable-next-line @typescript-eslint/no-var-requires
const mailchimp: Mailchimp = require<Mailchimp>("@mailchimp/mailchimp_marketing")

// eslint-disable-next-line @typescript-eslint/no-var-requires
const mailchimpTx = require<(key: string) => MailchimpTx>("@mailchimp/mailchimp_transactional")(MailChimp.transactionalAccessToken)

type Mailchimp = {
    setConfig: (config: unknown) => void,
    ping: {
        get: () => Promise<string>
    },
    lists: {
        addListMember: (listId: string, body: unknown) => Promise<{ id: string }>
        getListMember: (listId: string, subscriberHash: string) => unknown
    }
}

type MailchimpTx = {
    users: {
        ping: () => Promise<string>
    }
}

const log = new Logger("MailComponent")

export class MailComponent {


    async ping(): Promise<unknown> {
        mailchimp.setConfig({
            apiKey: MailChimp.marketingAccessToken,
            server: MailChimp.server
        })

        return await mailchimp.ping.get()
    }

    async pingTx(): Promise<string> {
        const response = await mailchimpTx.users.ping()
        return response
    }

    async addContact(email: string, firstName: string, lastName: string): Promise<string | undefined> {
        try {
            const response = await mailchimp.lists.addListMember(MailChimp.audienceId,
                {
                    email_address: email,
                    status: "subscribed",
                    merge_fields: {
                        FNAME: firstName,
                        LNAME: lastName
                    }
                })

            return response.id
        } catch (x) {
            log.error(x)
        }
    }
}