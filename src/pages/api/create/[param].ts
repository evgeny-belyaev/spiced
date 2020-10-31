import { NextApiRequest, NextApiResponse } from 'next'
import { getDatabase } from '../../../components/dataProvider'

export type RequestType = {
    param: String
}

export type ResponseType = {
    name: String
}

type HttpMethod = "GET" | "POST"

function ensureMethod(httpMethod: HttpMethod, req: NextApiRequest, res: NextApiResponse<ResponseType>) {
    if (req.method != httpMethod) {
        res.status(403).end()
        return false
    }

    return true
}

export const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseType>): Promise<void> => {
    if (ensureMethod("POST", req, res)) {
        const {
            query: { param },
        } = req

        await getDatabase().ref("test/data").set({ hello: param })

        res.status(200).json({ name: "World " + param })
    }
}
