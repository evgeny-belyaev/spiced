import { ApiEndpoint } from "./ApiEndpoint"
import { Fetcher } from "./fetcher"
import * as express from "express"
import { ICommunityComponent } from "../components/logic/ICommunityComponent"

type OptInApiParams = unknown

type OptInApiResponse = unknown

export class OptInApi extends ApiEndpoint<OptInApiParams, OptInApiResponse> {
    path = "/optin"

    constructor(private communityComponent: ICommunityComponent) {
        super()
    }

    async client(params: OptInApiParams): Promise<OptInApiResponse> {
        const response = await new Fetcher().post(this.path, params)
        return <OptInApiResponse>(await response.json())
    }

    async handler(request: express.Request, response: express.Response): Promise<void> {
        const timeSpanId = await this.communityComponent.sendOptInRequest(new Date())

        response.status(200).json({
            matchUrl: "https://us-central1-spiced-f9677.cloudfunctions.net/api/match?timeSpanId=" + timeSpanId
        })
    }
}
