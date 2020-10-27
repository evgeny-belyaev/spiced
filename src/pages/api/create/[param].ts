import { NextApiRequest, NextApiResponse } from 'next'
import { getDatabase } from '../../../components/dataProvider'

type Data = {
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

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (ensureMethod("GET", req, res)) {
        const {
            query: { param },
        } = req

        await getDatabase().ref("test/data").set({ hello: param })

        res.status(200).json({ name: "World " + param })
    }
}
