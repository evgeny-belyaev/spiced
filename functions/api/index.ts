import { Application } from "express"
import { CreateCommunityWebHookApi } from "../../site/api/createCommunityWebHook"
import { JoinCommunityWebHookApi } from "../../site/api/joinCommunityWebHook"
import { MatchApi } from "../../site/api/matchApi"
import { OptInApi } from "../../site/api/optInApi"
import express = require("express")
import { createCommunityComponent } from "../../site/components/logic/CreateCommunityComponent"

const app: Application = express()
app.disable("x-powered-by")

app.get("/test", (request: express.Request, response: express.Response): void => {
    response.status(200).send("test")
})

const communityComponent = createCommunityComponent()

new CreateCommunityWebHookApi(communityComponent).connectPost(app)
new JoinCommunityWebHookApi(communityComponent).connectPost(app)
new MatchApi(communityComponent).connectGet(app)
new OptInApi(communityComponent).connectGet(app)

export default app