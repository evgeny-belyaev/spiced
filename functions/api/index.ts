import * as express from "express"
import { CreateCommunityApi } from "../../site/api/createCommunity"
import { CreateCommunityTypeFormWebHookApi } from "../../site/api/createCommunityTypeFormWebHook"

const app = express()
app.disable("x-powered-by")


new CreateCommunityApi().connectPost(app)
new CreateCommunityTypeFormWebHookApi().connectPost(app)

export default app