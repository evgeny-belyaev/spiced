import { Application } from "express"
import { CreateCommunityWebHookApi } from "../../site/api/createCommunityWebHook"
import { JoinCommunityWebHookApi } from "../../site/api/joinCommunityWebHook"
import { MatchApi } from "../../site/api/matchApi"
import { OptInApi } from "../../site/api/optInApi"
import { createCommunityComponent } from "../../site/components/logic/CreateCommunityComponent"
import { Matcher } from "../../site/components/logic/matcher"
import { SpicedDatabase } from "../../site/components/database/spicedDatabase"
import express = require("express")

const app: Application = express()
app.disable("x-powered-by")

app.get("/test", (request: express.Request, response: express.Response): void => {
    response.status(200).send("test")
})

const communityComponent = createCommunityComponent()
const matcher = new Matcher(new SpicedDatabase())

new CreateCommunityWebHookApi(communityComponent).connectPost(app)
new JoinCommunityWebHookApi(communityComponent).connectPost(app)

new MatchApi(communityComponent, matcher).connectGet(app)
new OptInApi(communityComponent, matcher).connectGet(app)

export default app