import * as axios from "axios"
import { Forms } from "../site/components/constants"
import { getTypeWormWebHookPath } from "../site/components/forms/formsUtils"

type Environment = {
    name: string,
    functionsBaseUrl: string
}

type Configuration = NodeJS.Dict<Environment>

const config: Configuration = {
    production: {
        name: "production",
        functionsBaseUrl: "https://us-central1-spiced-f9677.cloudfunctions.net"
    },
    local: {
        name: "local",
        functionsBaseUrl: "https://smooth-goose-57.loca.lt/spiced-f9677/us-central1"
    }
}

type Response = {
    url: string,
    enabled: boolean,
    tag: string,
    id: string
}

async function createWebHook (formId: string, hookName: string, env: Environment) {
    const tag = `${hookName}-${env.name}`
    const url = `https://api.typeform.com/forms/${formId}/webhooks/${tag}`

    try {
        const hookPath = getTypeWormWebHookPath(hookName)
        const result = await axios.default(url, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${Forms.accessToken}`
            },
            data: {
                "url": `${env.functionsBaseUrl}/api${hookPath}`,
                "enabled": true
            }
        })

        const data = result.data as Response

        console.log(`${data.url}`)
    } catch (x) {
        console.error(x)
    }

}

async function setup (configurationName: string): Promise<void> {
    const env = config[configurationName]

    if (env === undefined) {
        console.log("Cant find env " + configurationName)
        return
    }

    await createWebHook(
        Forms.createCommunity.formId,
        Forms.createCommunity.name,
        env
    )

    await createWebHook(
        Forms.joinCommunity.formId,
        Forms.joinCommunity.name,
        env
    )
}


const args = process.argv.slice(2)
void setup(args[0])
