import { Application } from "express"
import { CommunityComponent } from "../../site/components/logic/CommunityComponent"
import { TokenEncryptor } from "../../site/components/TokenEncryptor"
import { FormsApi } from "../../site/components/forms/formsApi"
import { MailComponent } from "../../site/components/mail"
import { SpicedDatabase } from "../../site/components/database/spicedDatabase"
import { CreateCommunityWebHookApi } from "../../site/api/createCommunityWebHook"
import express = require("express")
import { UrlBuilder } from "../../site/components/urlBuilder"

const app: Application = express()
app.disable("x-powered-by")

app.get("/test", (request: express.Request, response: express.Response): void => {
    response.status(200).send("test")
})

new CreateCommunityWebHookApi(
    new CommunityComponent(new FormsApi(), new MailComponent(), new SpicedDatabase(), new UrlBuilder(new TokenEncryptor()))
).connectPost(app)

export default app