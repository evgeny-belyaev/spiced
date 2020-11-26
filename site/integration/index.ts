import { AxiosStatic } from "axios"
import { Forms } from "../components/constants"
import { getTypeWormWebHookPath } from "../components/forms/formsUtils"
import { Logger } from "../components/logger"
import { UrlBuilder } from "../components/urlBuilder"
import { TokenEncryptor } from "../components/TokenEncryptor"
import { SpicedDatabase } from "../components/database/spicedDatabase"

const log = new Logger("integration")
const baseFunctionsUrl = "http://localhost:5001/spiced-f9677/us-central1/api"
const baseSiteUrl = "http://localhost:5000"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require("axios") as AxiosStatic

async function createCommunity(formResponseId: string) {
    const url = baseFunctionsUrl + getTypeWormWebHookPath(Forms.createCommunity.name)

    log.debug(`POST ${url}`)

    return await axios.post(url, {
        "event_id": "01EPYS7P4P6ZJAYPG1DQ3F23J0",
        "event_type": "form_response",
        "form_response": {
            "form_id": "NaV9AthP",
            "token": formResponseId,
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
    })
}

async function confirmCommunityCreation(createFormResponseId: string) {
    const urlBuilder = new UrlBuilder(new TokenEncryptor())
    const url = urlBuilder.getCreateCommunityConfirmationUrl(createFormResponseId)

    log.debug(`GET ${url}`)

    await axios.get(url)
}

async function confirmJoin(createFormResponseId: string, joinFormResponseId: string) {
    const spicedDatabase = new SpicedDatabase()

    const communityId = await spicedDatabase.getCommunityIdByTypeFormResponseId(createFormResponseId)

    if (communityId) {
        const urlBuilder = new UrlBuilder(new TokenEncryptor())
        const url = urlBuilder.getJoinCommunityConfirmationUrl(communityId, joinFormResponseId)

        log.debug(`GET ${url}`)

        await axios.get(url)
    }
}

async function match() {
    const url = baseFunctionsUrl + "/match"

    log.debug(`POST ${url}`)

    await axios.post(url)
}

async function run(): Promise<void> {
    const numberOfCommunities = 10
    const numberOfUsers = 10

    for (let communityId = 0; communityId < numberOfCommunities; communityId++) {
        await confirmCommunityCreation(communityId.toString())

        for (let userId = 0; userId < numberOfUsers; userId++) {
            await confirmJoin(communityId.toString(), userId.toString())
        }
    }

    await match()
}

export default run()