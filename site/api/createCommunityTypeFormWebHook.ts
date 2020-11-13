import { post } from "./utils"
import * as express from "express"
import { Logger } from "../components/logger"
import { BaseUrl } from "../components/constants"
import { ApiEndpoint } from "./ApiEndpoint"
import { TokenEncryptor } from "../components/TokenEncryptor";

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

export class CreateCommunityTypeFormWebHookApi extends ApiEndpoint<CreateCommunityTypeFormWebHookParams, CreateCommunityTypeFormWebHookResponse> {
    path = "/createCommunity/hook"

    private emailFieldId = "B8IPm7Osl6R1"

    async process(token: string, email: string): Promise<void> {
        const tokenEncryptor = new TokenEncryptor()
        const url = BaseUrl + "/createCommunity/" + tokenEncryptor.encrypt(token)

    }



    async handler(request: express.Request, response: express.Response<unknown>): Promise<void> {
        const params = <CreateCommunityTypeFormWebHookParams>(request.body)
        log.debug("createCommunity", JSON.stringify(params))
        let email, token

        try {
            token = params.form_response.token
            email = params.form_response.answers.filter((a: Answer) => {
                return a.field.id === this.emailFieldId
            })[0].email
        } catch (x) {
            throw Error("Invalid request")
        }

        if (!!token && !!email) {
            await this.process(token, email)
        } else {
            throw Error("Invalid request")
        }

        response.status(200).end()
    }

    async client(params: CreateCommunityTypeFormWebHookParams): Promise<CreateCommunityTypeFormWebHookResponse> {
        const response = await post(this.path, params)
        return <CreateCommunityTypeFormWebHookResponse>(await response.json())
    }
}