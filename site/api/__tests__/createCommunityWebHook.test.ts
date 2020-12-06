import { createMocks } from "node-mocks-http"
import { CommunityComponent } from "../../components/logic/CommunityComponent"
import { CreateCommunityWebHookApi } from "../createCommunityWebHook"
import { givenCommunityComponent } from "../../components/testUtils"
import { Forms } from "../../components/constants"

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
                    "id": Forms.createCommunity.answers.creatorEmailAddress,
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
                    "id": Forms.createCommunity.answers.creatorEmailAddress,
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
                    "id": "WRONG",
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
                    "id": "WRONG",
                    "type": "email",
                    "ref": "a46913210c42aaf5"
                }
            }
        ]
    }
}

function givenApi (communityComponent: CommunityComponent) {
    return new CreateCommunityWebHookApi(communityComponent)
}

describe("CreateCommunityTypeFormWebHookApi", () => {
    test("responds 500 to invalid POST(no email)", () => {
        // Arrange

        const { mock: communityComponent } = givenCommunityComponent()

        const api = givenApi(
            communityComponent()
        )

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
        const { mock: communityComponent } = givenCommunityComponent()

        const api = givenApi(
            communityComponent()
        )

        const { req, res } = createMocks({
            method: "POST",
            query: {},
            body: ["invalid"]
        })

        // Act
        // Assert
        void expect(api.handler(req, res)).rejects.toEqual(new Error("Invalid request"))
    })

    test("should call sendCreateCommunityConfirmationEmail with valid args", async () => {
        // Arrange
        const { mock: communityComponent, sendCreateCommunityConfirmationEmail } = givenCommunityComponent()

        const api = givenApi(
            communityComponent()
        )

        const { req, res } = createMocks({
            method: "POST",
            query: {},
            body: responseData
        })

        // Act
        await api.handler(req, res)

        // Assert
        expect(res.statusCode).toEqual(200)
        expect(sendCreateCommunityConfirmationEmail).toBeCalledWith("07fqxivsl4zgd7c6507fqfldiqinln21", "evgeny.belyaev@gmail.com")
    })
})

export {}