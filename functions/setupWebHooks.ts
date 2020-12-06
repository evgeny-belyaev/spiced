import * as axios from "axios"
import {
    EnvironmentType,
    Forms,
    getCreateCommunityFormDescriptor,
    getJoinCommunityFormDescriptor,
    Url
} from "../site/components/constants"
import { getTypeWormWebHookPath } from "../site/components/forms/formsUtils"

type Environment = {
    name: string,
    functionsBaseUrl: string
}

type Configuration = NodeJS.Dict<Environment>

const config: Configuration = {
    production: {
        name: "production",
        functionsBaseUrl: Url.getFunctionsBaseUrl("production")
    },
    local: {
        name: "local",
        functionsBaseUrl: Url.getFunctionsBaseUrl("local")
    }
}

type Response = {
    url: string,
    enabled: boolean,
    tag: string,
    id: string
}

async function createWebHook(formId: string, hookName: string, env: Environment) {
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

        console.log(`${formId} ${tag} ${data.url}`)
    } catch (x) {
        console.error(x)
    }

}

async function setup(configurationName: EnvironmentType): Promise<void> {
    const env = config[configurationName]

    if (env === undefined) {
        console.log("Cant find env " + configurationName)
        return
    }


    await createWebHook(
        getCreateCommunityFormDescriptor(configurationName).formId,
        getCreateCommunityFormDescriptor(configurationName).name,
        env
    )

    await createWebHook(
        getJoinCommunityFormDescriptor(configurationName).formId,
        getJoinCommunityFormDescriptor(configurationName).name,
        env
    )
}


const args = process.argv.slice(2)
void setup(args[0] as EnvironmentType)
