import * as express from "express"

export interface IApiEndpoint<TParams, TResponse> {
    path: string
    handler: (request: express.Request, response: express.Response) => Promise<void>
    client: (params: TParams) => Promise<TResponse>
}