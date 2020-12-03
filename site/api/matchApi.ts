import { ApiEndpoint } from "./ApiEndpoint"
import { Fetcher } from "./fetcher"
import * as express from "express"
import { ICommunityComponent } from "../components/logic/ICommunityComponent"
import { IMatcher } from "../components/logic/IMatcher"

type MatchApiParams = {
    timeSpanId: string
}

type MatchApiResponse = unknown

export class MatchApi extends ApiEndpoint<MatchApiParams, MatchApiResponse> {
    path = "/match"

    constructor(
        private communityComponent: ICommunityComponent,
        private matcher: IMatcher
    ) {
        super()
    }

    async client(params: MatchApiParams): Promise<MatchApiResponse> {
        const response = await new Fetcher().post(this.path, params)
        return <MatchApiResponse>(await response.json())
    }

    async handler(request: express.Request, response: express.Response): Promise<void> {
        const utc = new Date().getTime()
        const timeSpanId = this.matcher.getTimeSpanId(utc).toString()

        const result = await this.communityComponent.monday(timeSpanId)

        response.status(200).json(result)
    }
}
