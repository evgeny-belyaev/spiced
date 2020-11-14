import { CreateCommunityTypeFormWebHookApi } from "../createCommunityTypeFormWebHook"
import { createMocks } from "node-mocks-http"
import { TokenEncryptor } from "../../components/TokenEncryptor"
import { MailComponent } from "../../components/mail"
import { Url } from "../../components/constants"
import { CommunityComponent } from "../../components/logic/CommunityComponent"

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

function givenApi(communityComponent: CommunityComponent) {
    return new CreateCommunityTypeFormWebHookApi(communityComponent)
}

function givenCommunityComponent() {
    return
}

describe("CreateCommunityTypeFormWebHookApi", () => {
    test("responds 500 to invalid POST(no email)", () => {
        // Arrange

        const communityComponent = jest.fn<CommunityComponent>(() =>({
            sendCreateCommunityConfirmationEmail: jest.fn()
        }))

        const api = givenApi(
            communityComponent()
        )

        const {req, res} = createMocks({
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
        const communityComponent = jest.fn<CommunityComponent>(() =>({
            sendCreateCommunityConfirmationEmail: jest.fn()
        }))

        const api = givenApi(
            communityComponent()
        )

        const {req, res} = createMocks({
            method: "POST",
            query: {},
            body: ["invalid"]
        })

        // Act
        // Assert
        void expect(api.handler(req, res)).rejects.toEqual(new Error("Invalid request"))
    })

    test("should encrypt token and send email", async () => {
        // Arrange
        const sendCreateCommunityConfirmationEmail = jest.fn()
        const communityComponent = jest.fn<CommunityComponent>(() =>({
            sendCreateCommunityConfirmationEmail
        }))

        const api = givenApi(
            communityComponent()
        )

        const {req, res} = createMocks({
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