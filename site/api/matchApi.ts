import { ApiEndpoint } from "./ApiEndpoint"
import { Fetcher } from "./fetcher"
import * as express from "express"
import { ICommunityComponent } from "../components/logic/ICommunityComponent"

type MatchApiParams = {
    timeSpanId: string
}

type MatchApiResponse = unknown

export class MatchApi extends ApiEndpoint<MatchApiParams, MatchApiResponse> {
    path = "/match"

    constructor(private communityComponent: ICommunityComponent) {
        super()
    }

    async client(params: MatchApiParams): Promise<MatchApiResponse> {
        const response = await new Fetcher().post(this.path, params)
        return <MatchApiResponse>(await response.json())
    }

    async handler(request: express.Request, response: express.Response): Promise<void> {
        const params = <MatchApiParams>(request.query)

        if (!params || !params.timeSpanId) {
            response.status(500).json({error: "timeSpanId is empty or invalid"})
        } else {
            const result = await this.communityComponent.monday(params.timeSpanId)

            response.status(200).json(result)
        }
    }
}
