export class Fetcher {
    async post(url: string, params?: unknown): Promise<Response> {
        return await fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
    }

    async get(url: string, headers?: unknown, bodyParams?: unknown): Promise<Response> {
        return await fetch(url, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyParams)
        })
    }
}