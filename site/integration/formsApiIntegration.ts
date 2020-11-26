import { IFormsApi } from "../components/forms/formsApi"
import { FormAnswer, FormResponse } from "../components/forms/types"
import { Forms } from "../components/constants"

let idx = 0

function creteJoinFormResponse(responseId: string) : FormResponse {
    idx++

    return {
        "total_items": 1,
        "page_count": 1,
        "items": [
            {
                "landing_id": responseId,
                "token": responseId,
                "response_id": responseId,
                "landed_at": "2020-11-23T12:54:05Z",
                "submitted_at": "2020-11-23T12:54:42Z",
                "metadata": {
                    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36",
                    "platform": "other",
                    "referer": "https://radmir765811.typeform.com/to/Y6665JuG?communitytitle=%D0%BD%D0%BE%D0%B2%D0%BE%D0%B5&communityid=-MMp9Y9roWzgW0flhkHW",
                    "network_id": "6c946d374a",
                    "browser": "default"
                },
                "hidden": {
                    "communityid": "-MMp9Y9roWzgW0flhkHW",
                    "communitytitle": "новое"
                },
                "calculated": {
                    "score": 0
                },
                "answers": [
                    {
                        "field": {
                            "id": "yTfniwfEZHmy",
                            "ref": "b78462b6-51a1-4971-ac3e-435f6d6bd2e6",
                            "type": "short_text"
                        },
                        "type": "text",
                        "text": "first" + responseId
                    },
                    {
                        "field": {
                            "id": "7pfMxKZlyBqe",
                            "ref": "9547e114-21ab-4727-9e98-283fe992303b",
                            "type": "short_text"
                        },
                        "type": "text",
                        "text": "last" + responseId
                    },
                    {
                        "field": {
                            "id": "fWuSaWrKCVbZ",
                            "ref": "a46913210c42aaf5",
                            "type": "email"
                        },
                        "type": "email",
                        "email": `${responseId}_${idx}@mail.com`
                    },
                    {
                        "field": {
                            "id": "3kIm7gd9aPCl",
                            "ref": "b08d4ba443cad868",
                            "type": "phone_number"
                        },
                        "type": "phone_number",
                        "phone_number": "+7123121212"
                    },
                    {
                        "field": {
                            "id": "bKxH0PJxunet",
                            "ref": "d9e7f7cb-084c-43bc-b04b-67c209c5d2f2",
                            "type": "website"
                        },
                        "type": "url",
                        "url": "https://fb.com/user" + responseId + "/" + idx.toString()
                    }
                ]
            }
        ]
    }
}

function creteCreateFormResponse(responseId: string) : FormResponse {
    return {
        "total_items": 1,
        "page_count": 1,
        "items": [
            {
                "landing_id": responseId,
                "token": responseId,
                "response_id": responseId,
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
                        "text": "creatorFirst" + responseId
                    },
                    {
                        "field": {
                            "id": "9IoVfWEsWEJm",
                            "ref": "9547e114-21ab-4727-9e98-283fe992303b",
                            "type": "short_text"
                        },
                        "type": "text",
                        "text": "creatorLast" + responseId
                    },
                    {
                        "field": {
                            "id": "hzQC3bQ87sQL",
                            "ref": "8f6d301d1719787f",
                            "type": "long_text"
                        },
                        "type": "text",
                        "text": "communityName" + responseId
                    },
                    {
                        "field": {
                            "id": "Uukms7hM8K5i",
                            "ref": "934209e4b4192144",
                            "type": "website"
                        },
                        "type": "url",
                        "url": "https://communityUrl/" + responseId
                    },
                    {
                        "field": {
                            "id": "B8IPm7Osl6R1",
                            "ref": "a46913210c42aaf5",
                            "type": "email"
                        },
                        "type": "email",
                        "email": "creatorEmail" + responseId + "a@v.com"
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
                        "url": "https://facebook/" + responseId
                    }
                ]
            }
        ]
    }
}

export class FormsApiIntegration implements IFormsApi {

    async getAnswers(formId: string, responseId: string): Promise<FormAnswer[]> {
        const response = await this.getResponse(formId, responseId)
        if (response && response.items) {
            return response.items[0]?.answers
        } else {
            return []
        }
    }

    async getResponse(formId: string, responseId: string): Promise<FormResponse | null> {
        switch (formId) {
            case Forms.createCommunity.formId: {
                return creteCreateFormResponse(responseId)
            }
            case  Forms.joinCommunity.formId: {
                return creteJoinFormResponse(responseId)
            }
            default: {
                return null
            }
        }
    }
}

