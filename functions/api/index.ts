import * as express from "express"
import { CreateCommunityTypeFormWebHookApi } from "../../site/api/createCommunityTypeFormWebHook"
import { TokenEncryptor } from "../../site/components/TokenEncryptor"
import { MailComponent } from "../../site/components/mail"

const app = express()
app.disable("x-powered-by")


new CreateCommunityTypeFormWebHookApi(
    new TokenEncryptor(),
    new MailComponent()
).connectPost(app)

export default app