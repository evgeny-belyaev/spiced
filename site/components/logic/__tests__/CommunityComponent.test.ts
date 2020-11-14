import { CommunityComponent } from "../CommunityComponent"
import { TokenEncryptor } from "../../TokenEncryptor"
import { FormsApi } from "../../forms"
import { Forms, Url } from "../../constants"
import { MailComponent } from "../../mail"

export default describe("CommunityComponent", () => {
    test("sendCreateCommunityConfirmationEmail", async () => {
        // Arrange
        const encrypt = jest.fn(() => {
            return "encrypted"
        })

        const sendTemplate = jest.fn()

        const tokenEncryptorMock = jest.fn<TokenEncryptor>(() => ({
            encrypt
        }))

        const mailComponentMock = jest.fn<MailComponent>(() => ({
            sendTemplate
        }))

        const communityComponent = new CommunityComponent(
            tokenEncryptorMock(),
            jest.fn()(),
            mailComponentMock()
        )

        // Act
        await communityComponent.sendCreateCommunityConfirmationEmail("id", "a@b.com")

        // Assert
        expect(encrypt).toBeCalledWith("id")
        expect(sendTemplate).toBeCalledWith(
            "createCommunityConfirmation",
            [{
                name: "createCommunityConfirmationUrl",
                content: Url.getBaseUrl() + "/createCommunity/encrypted"
            }]
        )
    })

    test("createCommunity", async () => {
        // Arrange
        const decrypt = jest.fn(() => ("decrypted"))
        const getAnswers = jest.fn(() => ([
            {
                field: {
                    id: "id",
                    type: "type",
                    title: "title",
                    ref: "ref"
                },
                type: "text",
                text: "string"
            }
        ]))

        const tokenEncryptorMock = jest.fn<TokenEncryptor>(() => ({
            decrypt
        }))

        const formsApiMock = jest.fn<FormsApi>(() => ({
            getAnswers
        }))

        const mailComponentMock = jest.fn<MailComponent>(() => ({
            getAnswers
        }))


        const communityComponent = new CommunityComponent(
            tokenEncryptorMock(),
            formsApiMock(),
            mailComponentMock()
        )

        // Act
        const result = await communityComponent.createCommunity("encrypted")

        // Assert
        expect(decrypt).toBeCalledWith("encrypted")
        expect(getAnswers).toBeCalledWith(Forms.createCommunityFormId, "decrypted")
    })
})