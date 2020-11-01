import * as functions from 'firebase-functions';
import * as express from 'express';
const { default: next } = require('next') // sic!
import { getDatabase } from "../site/components/database/dataProvider"

export type RequestType = {
    param: String
}

export type ResponseType = {
    name: String
}

type HttpMethod = "GET" | "POST"

function ensureMethod(httpMethod: HttpMethod, req: express.Request, res: express.Response) {
    if (req.method != httpMethod) {
        res.status(403).end()
        return false
    }

    return true
}

export const api = functions.https.onRequest(async (request, response) => {
    if (ensureMethod("POST", request, response)) {
        const {
            query: { param },
        } = request

        await getDatabase().ref("test/data").set(request.body)

        response.status(200).json({ name: "World " + param })
    }
});

const nextjsServer = next({
    dev: false,
    conf: {
        distDir: "build/site",
    },
})
const nextjsHandle = nextjsServer.getRequestHandler()

export const site = functions.https.onRequest(async (request, response) => {
    return nextjsServer.prepare().then(() => nextjsHandle(request, response))
});

