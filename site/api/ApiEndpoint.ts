import * as express from "express"
import { ParamsDictionary } from "express-serve-static-core"
import { Logger } from "../components/logger"
import { IApiEndpoint } from "./IApiEndpoint"

const log = new Logger("ApiEndpoint")

export abstract class ApiEndpoint<TParams, TResponse> implements IApiEndpoint<TParams, TResponse> {
    abstract path: string
    abstract handler(request: express.Request<ParamsDictionary>, response: express.Response<unknown>): Promise<void>
    abstract client(params: TParams): Promise<TResponse>

    connectPost(app: express.Application): void {
        app.post(this.path, async (request: express.Request, response: express.Response): Promise<void> => {
            try {
                return this.handler(request, response)
            } catch (x) {
                response.status(500).send("Error")

                log.error(x)
            }
        })
    }
}