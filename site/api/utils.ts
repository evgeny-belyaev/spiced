import * as express from "express"

export interface IApiEndpoint<TParams, TResponse> {
    path: string
    handler: (request: express.Request, response: express.Response) => Promise<void>
    client: (params: TParams) => Promise<TResponse>
}

export async function post(url: string, params: unknown): Promise<Response> {
    return await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })
}

export function isServer(): boolean {
    return typeof window === "undefined" || typeof jest !== "undefined"
}
