import * as express from "express"
import { CreateCommunityApi } from "../../site/api/createCommunity"

const app = express()
app.disable("x-powered-by")

new CreateCommunityApi().connect(app)

export default app