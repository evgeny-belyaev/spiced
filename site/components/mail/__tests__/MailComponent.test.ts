import { MailComponent } from "../index"


describe("MailComponent", () => {
    test("Should ping", async () => {
        const mail = new MailComponent()

        expect(await mail.ping()).toEqual({"health_status": "Everything's Chimpy!"})
    })


    test("Should ping tx", async () => {
        const mail = new MailComponent()

        expect(await mail.pingTx()).toEqual("PONG!")
    })



    // test("Add contact", async () => {
    //     const mail = new MailComponent()
    //
    //     await mail.addContact("bla@gmail.com", "bla", "bla")
    // })
})

export {}