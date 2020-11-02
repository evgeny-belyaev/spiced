import * as functions from "firebase-functions"
import app from "./api/index"

// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment
const { default: next } = require("next") // sic!

export const api = functions.https.onRequest(app)

const nextjsServer = next({
    dev: false,
    conf: {
        distDir: "build/site",
    },
})
const nextjsHandle = nextjsServer.getRequestHandler()

export const site = functions.https.onRequest((request, response) => {
    return nextjsServer.prepare().then(() => nextjsHandle(request, response))
})

