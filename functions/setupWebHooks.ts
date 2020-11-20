import * as axios from "axios"
import { Forms, Url } from "../site/components/constants"
import { getTypeWormWebHookPath } from "../site/components/forms/formsUtils"

const accessToken = "CnLWx37r88w9NoqC5H3UrkVM1UDgNYVBt9VQi22aDURm"
const host = Url.getBaseUrl()
const baseUrl = `${host}/spiced-f9677/us-central1`

type Response = {
    url: string,
    enabled: boolean,
    tag: string,
    id: string
}

async function createWebHook (formId: string, hookName: string) {
    const url = `https://api.typeform.com/forms/${formId}/webhooks/${hookName}`

    try {
        const hookPath = getTypeWormWebHookPath(hookName)
        const result = await axios.default(url, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${accessToken}`
            },
            data: {
                "url": `${baseUrl}/api/${hookPath}`,
                "enabled": true
            }
        })

        const data = result.data as Response

        console.log(`${data.url}`)
    } catch (x) {
        console.error(x)
    }

}

async function setup (): Promise<void> {
    await createWebHook(
        Forms.createCommunity.formId,
        Forms.createCommunity.name
    )

    await createWebHook(
        Forms.joinCommunity.formId,
        Forms.joinCommunity.name
    )
}

void setup()

