import { handler, ResponseType, RequestType } from "../../pages/api/create/[param]"
import { testApi } from "../../components/testUtils"

describe("/api/create/[param]", () => {
    test("responds 200 to GET", async () => {
        const result = await testApi<RequestType, ResponseType>(
            handler,
            { param: "!!!" }
        )

        expect(result.status).toBe(200)
        expect(result.data).toEqual({ "name": "World !!!" })
    })
})