import { IApiEndpoint, safe, post } from "./utils"
import * as express from "express"
import { ParamsDictionary } from "express-serve-static-core"
import { Logger } from "../components/logger"
import { BaseUrl } from "../components/constants"

export type CreateCommunityTypeFormWebHookResponse = {
    url: string
}

type Answer = {
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

export type CreateCommunityTypeFormWebHookParams = {
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
        answers: [Answer]
    }
}

const log = new Logger("CreateCommunityTypeFormWebHookApi")


export class CreateCommunityTypeFormWebHookApi implements IApiEndpoint<CreateCommunityTypeFormWebHookParams, CreateCommunityTypeFormWebHookResponse> {
    path = "/createCommunity/hook"

    private emailFieldId = "B8IPm7Osl6R1"

    async process(token: string, email: string): Promise<void> {
        const a = token + email
        const salt = "07fqxivsl4zgd7c6507fqfldiqinln21"
        Buffer.from(salt + token).toString("base64")

        const url = BaseUrl + "/createCommunity/" + token
    }

    async handler(request: express.Request<ParamsDictionary>, response: express.Response<unknown>): Promise<void> {
        return safe(response, async () => {
            const params = <CreateCommunityTypeFormWebHookParams>(request.body)
            log.debug("createCommunity", JSON.stringify(params))

            const { token, answers } = params.form_response
            const email = answers.filter((a: Answer) => {
                return a.field.id === this.emailFieldId
            })[0].email

            if (!!token && !!email) {
                await this.process(token, email)
            }

            response.status(200).end()
        })
    }

    async client(params: CreateCommunityTypeFormWebHookParams): Promise<CreateCommunityTypeFormWebHookResponse> {
        const response = await post(this.path, params)
        return <CreateCommunityTypeFormWebHookResponse>(await response.json())
    }

    connect(app: express.Application): void {
        app.post(this.path, async (request: express.Request, response: express.Response): Promise<void> => {
            return safe(response, () => {
                return this.handler(request, response)
            })
        })
    }
}