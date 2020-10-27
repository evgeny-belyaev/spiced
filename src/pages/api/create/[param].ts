import { NextApiRequest, NextApiResponse } from 'next'

export type Data = {
    name: String
}

type HttpMethod = "GET" | "POST"

function ensureMethod(httpMethod: HttpMethod, req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method != httpMethod) {
        res.status(403).end()
        return false
    }

    return true
}

export const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (ensureMethod("POST", req, res)) {
        const {
            query: { param },
        } = req

        res.status(200).json({ name: "World " + param })
    }
}

export default handler