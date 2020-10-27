import { handler } from "../../pages/api/create/[param]"
import { createMocks } from 'node-mocks-http';

describe("/api/create/[param]", () => {
    test("responds 200 to GET", async () => {
        const { req, res } = createMocks({
            method: 'POST',
            query: {
                param: '!!!',
            },
        });

        handler(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining(
                { "name": "World !!!" }
            ),
        );
    })
})