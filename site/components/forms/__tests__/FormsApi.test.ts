import Axios from "axios"
import { Forms } from "../../constants"
import { FormsApi } from "../formsApi"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mockedAxios = require("axios") as jest.Mocked<typeof Axios>

jest.mock("axios")

const response1 = {
    "total_items": 1,
    "page_count": 1,
    "items": [
        {
            "landing_id": "whalv84vhy5v11pwhalv8rmx1e0hqidd",
            "token": "whalv84vhy5v11pwhalv8rmx1e0hqidd",
            "response_id": "whalv84vhy5v11pwhalv8rmx1e0hqidd",
            "landed_at": "2020-11-16T07:39:09Z",
            "submitted_at": "2020-11-16T07:39:42Z",
            "metadata": {
                "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
                "platform": "other",
                "referer": "https://radmir765811.typeform.com/to/NaV9AthP?typeform-embed=embed-widget&embed-hide-footer=true&embed-hide-headers=true&embed-opacity=100&typeform-embed-id=7mz3y",
                "network_id": "a9ef80884f",
                "browser": "default"
            },
            "hidden": {},
            "calculated": {
                "score": 0
            },
            "answers": [
                {
                    "field": {
                        "id": "iRELkeOPH06I",
                        "ref": "b78462b6-51a1-4971-ac3e-435f6d6bd2e6",
                        "type": "short_text"
                    },
                    "type": "text",
                    "text": "sdf"
                },
                {
                    "field": {
                        "id": "9IoVfWEsWEJm",
                        "ref": "9547e114-21ab-4727-9e98-283fe992303b",
                        "type": "short_text"
                    },
                    "type": "text",
                    "text": "sdf"
                },
                {
                    "field": {
                        "id": "hzQC3bQ87sQL",
                        "ref": "8f6d301d1719787f",
                        "type": "long_text"
                    },
                    "type": "text",
                    "text": "sdf"
                },
                {
                    "field": {
                        "id": "Uukms7hM8K5i",
                        "ref": "934209e4b4192144",
                        "type": "website"
                    },
                    "type": "url",
                    "url": "https://music.yandex.ru/settings?reqid=44808442015398750665961379160638063&from-passport"
                },
                {
                    "field": {
                        "id": "B8IPm7Osl6R1",
                        "ref": "a46913210c42aaf5",
                        "type": "email"
                    },
                    "type": "email",
                    "email": "evgeny.belyaev@gmail.com"
                },
                {
                    "field": {
                        "id": "iSTnU99AXZ3z",
                        "ref": "b08d4ba443cad868",
                        "type": "phone_number"
                    },
                    "type": "phone_number",
                    "phone_number": "+12015555555"
                },
                {
                    "field": {
                        "id": "QxmULEP1S82p",
                        "ref": "d9e7f7cb-084c-43bc-b04b-67c209c5d2f2",
                        "type": "website"
                    },
                    "type": "url",
                    "url": "https://music.yandex.ru/settings?reqid=44808442015398750665961379160638063&from-passport"
                }
            ]
        }
    ]
}

export default describe("FormsApi", () => {
    test("Forms.getResponsesUrl: should return url", () => {
        // Arrange

        // Act
        const result = Forms.getResponsesUrl("formId", ["id1", "id2"])

        // Assert
        expect(result).toBe("https://api.typeform.com/forms/formId/responses?included_response_ids=id1,id2")
    })

    test("Forms.getResponsesUrl: should throw with empty ids", () => {
        // Assert
        expect(() => {
            Forms.getResponsesUrl("formId", [])
        }).toThrowError("Invalid argument: includedResponsesIds")
    })


    test("should call TypeForm api to getResponses", async () => {
        // Arrange
        const formsApi = new FormsApi()

        // Act
        const r = await formsApi.getAnswers(Forms.createCommunity.formId, "123")

        // Assert
        expect(mockedAxios.get).toBeCalledWith(
            `https://api.typeform.com/forms/${Forms.createCommunity.formId}/responses?included_response_ids=123`,
            {
                "headers": {"Authorization": "Bearer CnLWx37r88w9NoqC5H3UrkVM1UDgNYVBt9VQi22aDURm"},
                "method": "GET"
            }
        )
    })

    test("Should return empty array for wrong response", async () => {
        // Arrange
        const formsApi = new FormsApi()

        mockedAxios.get.mockImplementation(() => (Promise.resolve({
            data: {
                "wrong": "response"
            }
        })))

        //Act
        const r = await formsApi.getAnswers(Forms.createCommunity.formId, "123")

        // Assert
        expect(r).toEqual([])
    })

    test("Should return empty array when more that 1 item", async () => {
        // Arrange
        mockedAxios.get.mockImplementation(() => (Promise.resolve({
            data: {
                "total_items": 2,
                "page_count": 1,
                "items": [
                    {}, {}
                ]
            }
        })))

        const formsApi = new FormsApi()


        //Act
        const r = await formsApi.getAnswers(Forms.createCommunity.formId, "123")

        // Assert
        expect(r).toEqual([])
    })
})
