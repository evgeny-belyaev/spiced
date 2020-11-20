import { getTypeWormWebHookPath } from "../components/forms/formsUtils"
import { Forms } from "../components/constants"
import { CommunityComponent } from "../components/logic/CommunityComponent"
import { Fetcher } from "./fetcher"
import * as express from "express"
import { ApiEndpoint } from "./ApiEndpoint"
import { WebHookAnswer, WebHookParams } from "../components/forms/types"


type JoinCommunityWebHookResponse = {
    url: string
}

export class JoinCommunityWebHookApi extends ApiEndpoint<WebHookParams, JoinCommunityWebHookResponse> {
    path = getTypeWormWebHookPath(Forms.joinCommunity.name)

    constructor (private communityComponent: CommunityComponent) {
        super()
    }

    private validateInput (body: any) {
        const params = <WebHookParams>(body)

        let email, token

        try {
            token = params.form_response.token
            email = params.form_response.answers.filter((a: WebHookAnswer) => {
                return a.field.id === Forms.joinCommunity.answers.emailAddress
            })[0].email
        } catch (x) {
            throw Error("Invalid request")
        }

        return {
            token,
            email: email ? email : ""
        }
    }


    async handler (request: express.Request, response: express.Response): Promise<void> {
        const { token, email } = this.validateInput(request.body)

        await this.communityComponent.sendJoinCommunityConfirmationEmail(token, email)

        response.status(200).end()

    }

    async client (params: WebHookParams): Promise<JoinCommunityWebHookResponse> {
        const response = await new Fetcher().post(this.path, params)
        return <JoinCommunityWebHookResponse>(await response.json())
    }
}