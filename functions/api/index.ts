import * as express from "express"
import { CreateCommunityTypeFormWebHookApi } from "../../site/api/createCommunityTypeFormWebHook"
import { CommunityComponent } from "../../site/components/logic/CommunityComponent"
import { TokenEncryptor } from "../../site/components/TokenEncryptor"
import { FormsApi } from "../../site/components/forms/formsApi"
import { MailComponent } from "../../site/components/mail"
import { SpicedDatabase } from "../../site/components/database/spicedDatabase"

const app = express()
app.disable("x-powered-by")

app.get("/test", (request: express.Request, response: express.Response): void => {
    response.status(200).send("test")
})

new CreateCommunityTypeFormWebHookApi(
    new CommunityComponent(
        new TokenEncryptor(),
        new FormsApi(),
        new MailComponent(),
        new SpicedDatabase()
    )
).connectPost(app)

export default app