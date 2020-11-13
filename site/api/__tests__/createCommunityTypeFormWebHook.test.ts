import { CreateCommunityTypeFormWebHookApi } from "../createCommunityTypeFormWebHook"
import { createMocks } from "node-mocks-http"

const responseData = {
    "event_id": "01EPYS7P4P6ZJAYPG1DQ3F23J0",
    "event_type": "form_response",
    "form_response": {
        "form_id": "NaV9AthP",
        "token": "07fqxivsl4zgd7c6507fqfldiqinln21",
        "landed_at": "2020-11-12T17:49:16Z",
        "submitted_at": "2020-11-12T17:49:44Z",
        "definition": {
            "id": "NaV9AthP",
            "title": "Community creation",
            "fields": [
                {
                    "id": "B8IPm7Osl6R1",
                    "title": "\\nEnter your email, please",
                    "type": "email",
                    "ref": "a46913210c42aaf5",
                    "properties": {}
                }
            ]
        },
        "answers": [
            {
                "type": "email",
                "email": "evgeny.belyaev@gmail.com",
                "field": {
                    "id": "B8IPm7Osl6R1",
                    "type": "email",
                    "ref": "a46913210c42aaf5"
                }
            }
        ]
    }
}

const responseData_noEmail = {
    "event_id": "01EPYS7P4P6ZJAYPG1DQ3F23J0",
    "event_type": "form_response",
    "form_response": {
        "form_id": "NaV9AthP",
        "token": "07fqxivsl4zgd7c6507fqfldiqinln21",
        "landed_at": "2020-11-12T17:49:16Z",
        "submitted_at": "2020-11-12T17:49:44Z",
        "definition": {
            "id": "NaV9AthP",
            "title": "Community creation",
            "fields": [
                {
                    "id": "B8IPm7Osl6R1__WRONG",
                    "title": "\\nEnter your email, please",
                    "type": "email",
                    "ref": "a46913210c42aaf5",
                    "properties": {}
                }
            ]
        },
        "answers": [
            {
                "type": "email",
                "email": "evgeny.belyaev@gmail.com",
                "field": {
                    "id": "B8IPm7Osl6R1__WRONG",
                    "type": "email",
                    "ref": "a46913210c42aaf5"
                }
            }
        ]
    }
}

function givenApi() {
    const api = new CreateCommunityTypeFormWebHookApi()
    api.process = jest.fn()
    return api
}

describe("CreateCommunityTypeFormWebHookApi", () => {
    test("responds 500 to invalid POST(no email)", () => {
        // Arrange
        const api = givenApi()
        const { req, res } = createMocks({
            method: "POST",
            query: {},
            body: responseData_noEmail
        })

        // Act
        // Assert
        void expect(api.handler(req, res)).rejects.toEqual(new Error("Invalid request"))
    })

    test("responds 500 to invalid POST", () => {
        // Arrange
        const api = givenApi()
        const { req, res } = createMocks({
            method: "POST",
            query: {},
            body: ["invalid"]
        })

        // Act
        // Assert
        void expect(api.handler(req, res)).rejects.toEqual(new Error("Invalid request"))
    })

    test("responds 200 to valid POST", async () => {
        // Arrange
        const api = givenApi()
        const { req, res } = createMocks({
            method: "POST",
            query: {},
            body: responseData
        })

        // Act
        await api.handler(req, res)

        // Assert
        expect(res.statusCode).toEqual(200)
        expect(api.process).toHaveBeenCalledWith("07fqxivsl4zgd7c6507fqfldiqinln21", "evgeny.belyaev@gmail.com")
    })
})

export { }