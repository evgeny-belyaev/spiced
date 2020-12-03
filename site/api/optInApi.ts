import { ApiEndpoint } from "./ApiEndpoint"
import { Fetcher } from "./fetcher"
import * as express from "express"
import { ICommunityComponent } from "../components/logic/ICommunityComponent"
import { IMatcher } from "../components/logic/IMatcher"

type OptInApiParams = unknown

type OptInApiResponse = unknown

export class OptInApi extends ApiEndpoint<OptInApiParams, OptInApiResponse> {
    path = "/optin"

    constructor(
        private communityComponent: ICommunityComponent,
        private matcher: IMatcher
    ) {
        super()
    }

    async client(params: OptInApiParams): Promise<OptInApiResponse> {
        const response = await new Fetcher().post(this.path, params)
        return <OptInApiResponse>(await response.json())
    }

    async handler(request: express.Request, response: express.Response): Promise<void> {
        const utc = new Date().getTime()
        const timeSpanId = this.matcher.getNextTimeSpanId(utc).toString()

        await this.communityComponent.sendOptInRequest(timeSpanId)

        response.status(200)
    }
}
