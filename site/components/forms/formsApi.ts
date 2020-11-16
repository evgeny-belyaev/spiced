import { Forms } from "../constants"
import { AxiosResponse, AxiosStatic } from "axios"
import { FormAnswer, FormResponse } from "./types"
import { Logger } from "../logger"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require("axios") as AxiosStatic

export class FormsApi {
    log = new Logger("FormsApi")

    private async get(url: string, bodyParams?: unknown): Promise<AxiosResponse> {
        return await axios.get(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${Forms.accessToken}`
            }
        })
    }

    async getAnswers(formId: string, responseId: string): Promise<FormAnswer[]> {
        const responsesUrl = Forms.getResponsesUrl(formId, [responseId])
        const response = await this.get(responsesUrl)

        if (response) {
            const formResponse = await response.data as FormResponse

            try {
                if (formResponse.items.length > 1) {
                    this.log.error("formResponse.items.length > 1")
                    return []
                } else {
                    const firstItem = formResponse.items[0]

                    return firstItem.answers
                }
            } catch (x) {
                this.log.error(x)
                return []
            }
        } else {
            return []
        }
    }
}