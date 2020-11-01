import * as functions from 'firebase-functions';
import * as express from 'express';
import { getDatabase } from "../site/components/dataProvider"

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


export const helloWorld = functions.https.onRequest(async (request, response) => {
    if (ensureMethod("POST", request, response)) {
        const {
            query: { param },
        } = request

        await getDatabase().ref("test/data").set(request.body)

        response.status(200).json({ name: "World " + param })
    }
});
