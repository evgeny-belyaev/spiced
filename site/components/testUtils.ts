import { NextApiRequest, NextApiResponse } from 'next'
import { createMocks } from 'node-mocks-http';

type ApiResult<TResponse> = {
    status: number,
    data: TResponse
}

export async function testApi<TRequest, TResponse>(
    endpoint: (req: NextApiRequest, res: NextApiResponse<TResponse>) => Promise<void>,
    request: TRequest
): Promise<ApiResult<TResponse>> {

    const { req, res } = createMocks({
        method: 'POST',
        query: request
    })

    // @ts-ignore
    await endpoint(req, res)

    return {
        status: res._getStatusCode(),
        data: JSON.parse(res._getData())
    }
}
