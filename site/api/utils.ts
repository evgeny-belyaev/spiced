import * as express from "express"
import { Logger } from "../components/logger"

const log = new Logger("api")

export interface IApiEndpoint<TParams, TResponse> {
    path: string
    handler: (request: express.Request, response: express.Response) => Promise<void>
    client: (params: TParams) => Promise<TResponse>
    connect: (app: express.Application) => void
}

export async function post(url: string, params: unknown): Promise<unknown> {
    return await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })
}

export async function safe(response: express.Response, fn: () => unknown): Promise<void> {
    try {
        await fn()
    } catch (x) {
        response.status(500).send("Error")

        log.error(x)
    }
}
