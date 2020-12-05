import { Forms } from "../constants"
import { AxiosResponse, AxiosStatic } from "axios"
import { FormResponse, FormResponseItem } from "./types"
import { Logger } from "../logger"
import { callGracefully } from "../../api/utils"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require("axios") as AxiosStatic

export interface IFormsApi {
    getAnswers(formId: string, responseId: string): Promise<FormResponseItem | null>
}

export class FormsApi implements IFormsApi {
    log = new Logger("FormsApi")

    private async get(url: string, bodyParams?: unknown): Promise<AxiosResponse> {
        return await axios.get(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${Forms.accessToken}`
            }
        })
    }

    private async getResponse(formId: string, responseId: string): Promise<FormResponse | null> {
        const responsesUrl = Forms.getResponsesUrl(formId, [responseId])

        try {
            const formResponse = await callGracefully(
                async () => {
                    const response = await this.get(responsesUrl)
                    return await response.data as FormResponse
                },
                (formResponse) => {
                    return formResponse && formResponse.items && formResponse.items.length > 0
                }
            )

            return formResponse
        } catch (x) {
            this.log.error(x)
            return null
        }
    }

    async getAnswers(formId: string, responseId: string): Promise<FormResponseItem | null> {
        const formResponse = await this.getResponse(formId, responseId)

        if (formResponse && formResponse.items) {
            if (formResponse.items.length > 1) {
                this.log.error("formResponse.items.length > 1")
                return null
            } else {
                return formResponse.items[0]
            }
        } else {
            return null
        }
    }
}