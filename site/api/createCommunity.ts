import * as express from "express"
import { ParamsDictionary } from "express-serve-static-core"
import { SpicedDatabase } from "../components/database/utils"
import { IApiEndpoint, safe, post } from "./utils"

type CreateCommunityApiResponse = {}

type CreateCommunityApiParams = {
    title: string,
    description: string
}

export class CreateCommunityApi implements IApiEndpoint<CreateCommunityApiParams, CreateCommunityApiResponse> {
    path = "/api/community/create"

    async handler(request: express.Request<ParamsDictionary>, response: express.Response<any>): Promise<void> {
        return safe(response, async () => {
            let params = <CreateCommunityApiParams>(request.body)

            await SpicedDatabase.createCommunity(params.title, params.description)

            response.status(200).json(params)
        })
    }

    async client(params: CreateCommunityApiParams): Promise<CreateCommunityApiResponse> {
        return <CreateCommunityApiResponse>(await post(this.path, params))
    }

    connect(app: express.Application) {
        app.post(this.path, async (request: express.Request, response: express.Response): Promise<void> => {
            return safe(response, () => {
                return this.handler(request, response)
            })
        })
    }
}

