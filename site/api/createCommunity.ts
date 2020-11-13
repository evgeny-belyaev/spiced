import * as express from "express"
import { ParamsDictionary } from "express-serve-static-core"
import { spicedDatabase } from "../components/database"
import { Logger } from "../components/logger"
import { ApiEndpoint } from "./ApiEndpoint"
import { post } from "./utils"

export type CreateCommunityApiResponse = {
    url: string
}

export type CreateCommunityApiParams = {
    title: string,
    description: string,
    userId: string
}

const log = new Logger("api")

export class CreateCommunityApi extends ApiEndpoint<CreateCommunityApiParams, CreateCommunityApiResponse> {
    path = "/api/community/create"

    private getCommunityUrl(request: express.Request<ParamsDictionary>, communityKey: string) {
        // FIXME: Add some encryption here  
        return request.baseUrl + "/community/" + communityKey
    }

    async handler(request: express.Request<ParamsDictionary>, response: express.Response<unknown>): Promise<void> {
        const params = <CreateCommunityApiParams>(request.body)

        log.debug("createCommunity", params)

        const communityKey = await spicedDatabase().createCommunity({
            title: params.description,
            description: params.description,
            creatorId: params.userId
        })

        response.status(200).json({
            url: this.getCommunityUrl(request, communityKey)
        })
    }

    async client(params: CreateCommunityApiParams): Promise<CreateCommunityApiResponse> {
        const response = await post(this.path, params)
        return <CreateCommunityApiResponse>(await response.json())
    }
}

