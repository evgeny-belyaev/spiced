import { Application } from "express"
import { CommunityComponent } from "../../site/components/logic/CommunityComponent"
import { TokenEncryptor } from "../../site/components/TokenEncryptor"
import { FormsApi } from "../../site/components/forms/formsApi"
import { MailComponent } from "../../site/components/mail"
import { SpicedDatabase } from "../../site/components/database/spicedDatabase"
import { CreateCommunityWebHookApi } from "../../site/api/createCommunityWebHook"
import { UrlBuilder } from "../../site/components/urlBuilder"
import { JoinCommunityWebHookApi } from "../../site/api/joinCommunityWebHook"
import { Matcher } from "../../site/components/logic/matcher"
import express = require("express")

const app: Application = express()
app.disable("x-powered-by")

app.get("/test", (request: express.Request, response: express.Response): void => {
    response.status(200).send("test")
})

const communityComponent = new CommunityComponent(
    new FormsApi(),
    new MailComponent(),
    new SpicedDatabase(),
    new UrlBuilder(new TokenEncryptor()),
    new Matcher(new SpicedDatabase())
)

new CreateCommunityWebHookApi(communityComponent).connectPost(app)
new JoinCommunityWebHookApi(communityComponent).connectPost(app)

export default app