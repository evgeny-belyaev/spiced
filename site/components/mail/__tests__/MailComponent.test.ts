import Axios from "axios"
import { MailComponent } from "../index"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mockedAxios = require("axios") as jest.Mocked<typeof Axios>

jest.mock("axios")

export default describe("MailComponent", () => {
    // test("Should ping", async () => {
    //     const mail = new MailComponent()
    //
    //     expect(await mail.ping()).toEqual({"health_status": "Everything's Chimpy!"})
    // })
    //
    //
    // test("Should ping tx", async () => {
    //     const mail = new MailComponent()
    //
    //     expect(await mail.pingTx()).toEqual("PONG!")
    // })

    test("sendTemplate", async () => {
        // Arrange
        const mail = new MailComponent()

        await mail.sendTemplate("evgeny.belyaev@gmail.com", "template1",
            [{
                name: "title",
                content: "dynamic title!!!!"
            }])

        expect(mockedAxios.post).toBeCalledWith(
            "https://mandrillapp.com/api/1.0/messages/send-template",
            {
                "key": "AOOq73pypJb5533oSKdqEw",
                "message": {
                    "from_email": "contact@wowyougotamatch.com",
                    "subject": "test subject",
                    "to": [{
                        "email": "evgeny.belyaev@gmail.com"
                    }]
                },
                "template_content": [{
                    "content": "dynamic title!!!!",
                    "name": "title"
                }],
                "template_name": "template1"
            })

    })
})
