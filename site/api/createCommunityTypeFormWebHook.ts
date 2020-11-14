import * as express from "express"
import { Logger } from "../components/logger"
import { ApiEndpoint } from "./ApiEndpoint"
import { TokenEncryptor } from "../components/TokenEncryptor"
import { MailComponent } from "../components/mail"
import { Url } from "../components/constants"
import { Fetcher } from "./fetcher"
import { CommunityComponent } from "../components/logic/CommunityComponent"


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

    private communityComponent: CommunityComponent

    constructor(communityComponent: CommunityComponent) {
        super()
        this.communityComponent = communityComponent

    }

    private emailFieldId = "B8IPm7Osl6R1"

    private validateInput(body: any) {
        const params = <CreateCommunityTypeFormWebHookParams>(body)

        let email, token

        try {
            token = params.form_response.token
            email = params.form_response.answers.filter((a: Answer) => {
                return a.field.id === this.emailFieldId
            })[0].email
        } catch (x) {
            throw Error("Invalid request")
        }

        return {
            token,
            email: email ? email : ""
        }
    }

    async handler(request: express.Request, response: express.Response<unknown>): Promise<void> {
        log.debug(JSON.stringify(request.body))

        const {token, email} = this.validateInput(request.body)

        await this.communityComponent.sendCreateCommunityConfirmationEmail(token, email)

        response.status(200).end()
    }

    async client(params: CreateCommunityTypeFormWebHookParams): Promise<CreateCommunityTypeFormWebHookResponse> {
        const response = await new Fetcher().post(this.path, params)
        return <CreateCommunityTypeFormWebHookResponse>(await response.json())
    }
}