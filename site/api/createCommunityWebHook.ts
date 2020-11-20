import * as express from "express"
import { Logger } from "../components/logger"
import { ApiEndpoint } from "./ApiEndpoint"
import { Fetcher } from "./fetcher"
import { CommunityComponent } from "../components/logic/CommunityComponent"
import { Forms } from "../components/constants"
import { getTypeWormWebHookPath } from "../components/forms/formsUtils"
import { WebHookAnswer, WebHookParams } from "../components/forms/types"


export type CreateCommunityWebHookResponse = {
    url: string
}



const log = new Logger("CreateCommunityWebHookApi")

export class CreateCommunityWebHookApi extends ApiEndpoint<WebHookParams, CreateCommunityWebHookResponse> {
    path = getTypeWormWebHookPath(Forms.createCommunity.name)

    constructor (private communityComponent: CommunityComponent) {
        super()
    }

    private validateInput (body: any) {
        const params = <WebHookParams>(body)

        let email, token

        try {
            token = params.form_response.token
            email = params.form_response.answers.filter((a: WebHookAnswer) => {
                return a.field.id === Forms.createCommunity.answers.creatorEmailAddress
            })[0].email
        } catch (x) {
            throw Error("Invalid request")
        }

        return {
            token,
            email: email ? email : ""
        }
    }

    async handler (request: express.Request, response: express.Response<unknown>): Promise<void> {
        log.debug(JSON.stringify(request.body))

        const { token, email } = this.validateInput(request.body)

        await this.communityComponent.sendCreateCommunityConfirmationEmail(token, email)

        response.status(200).end()
    }

    async client (params: WebHookParams): Promise<CreateCommunityWebHookResponse> {
        const response = await new Fetcher().post(this.path, params)
        return <CreateCommunityWebHookResponse>(await response.json())
    }
}