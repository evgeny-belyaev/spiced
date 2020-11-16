import { CommunityComponent } from "../CommunityComponent"
import { TokenEncryptor } from "../../TokenEncryptor"
import { FormsApi } from "../../forms/formsApi"
import { Forms, MailChimp, Url } from "../../constants"
import { MailComponent } from "../../mail"
import { SpicedDatabase } from "../../database/spicedDatabase"

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

        const spicedDatabaseMock = jest.fn<SpicedDatabase>()

        const communityComponent = new CommunityComponent(
            tokenEncryptorMock(),
            jest.fn()(),
            mailComponentMock(),
            spicedDatabaseMock()
        )

        // Act
        await communityComponent.sendCreateCommunityConfirmationEmail("id", "a@b.com")

        // Assert
        expect(encrypt).toBeCalledWith("id")
        expect(sendTemplate).toBeCalledWith(
            "a@b.com",
            "Community creation confirmation",
            "contact@wowyougotamatch.com",
            MailChimp.Templates.createCommunityConfirmation,
            [{
                name: "createCommunityConfirmationUrl",
                content: "<a href=\"http://localhost:5000/createCommunity/encrypted\">Click me</a>"
            }]
        )
    })

    test("createCommunity", async () => {
        // Arrange
        const decrypt = jest.fn(() => ("decrypted"))
        const encrypt = jest.fn(() => ("encrypted"))
        const getAnswers = jest.fn(() => ([
            {
                "field": {
                    "id": "iRELkeOPH06I",
                    "ref": "b78462b6-51a1-4971-ac3e-435f6d6bd2e6",
                    "type": "short_text"
                },
                "type": "text",
                "text": "firstName"
            },
            {
                "field": {
                    "id": "9IoVfWEsWEJm",
                    "ref": "9547e114-21ab-4727-9e98-283fe992303b",
                    "type": "short_text"
                },
                "type": "text",
                "text": "lastName"
            },
            {
                "field": {
                    "id": "hzQC3bQ87sQL",
                    "ref": "8f6d301d1719787f",
                    "type": "long_text"
                },
                "type": "text",
                "text": "community title"
            },
            {
                "field": {
                    "id": "Uukms7hM8K5i",
                    "ref": "934209e4b4192144",
                    "type": "website"
                },
                "type": "url",
                "url": "public link"
            },
            {
                "field": {
                    "id": "B8IPm7Osl6R1",
                    "ref": "a46913210c42aaf5",
                    "type": "email"
                },
                "type": "email",
                "email": "a@b.com"
            },
            {
                "field": {
                    "id": "iSTnU99AXZ3z",
                    "ref": "b08d4ba443cad868",
                    "type": "phone_number"
                },
                "type": "phone_number",
                "phone_number": "123"
            },
            {
                "field": {
                    "id": "QxmULEP1S82p",
                    "ref": "d9e7f7cb-084c-43bc-b04b-67c209c5d2f2",
                    "type": "website"
                },
                "type": "url",
                "url": "com.com"
            }
        ]))
        const createCommunity = jest.fn()

        const tokenEncryptorMock = jest.fn<TokenEncryptor>(() => ({
            decrypt, encrypt
        }))

        const formsApiMock = jest.fn<FormsApi>(() => ({
            getAnswers
        }))

        const mailComponentMock = jest.fn<MailComponent>(() => ({
            getAnswers
        }))

        const spicedDatabaseMock = jest.fn<SpicedDatabase>(() => ({
            createCommunity
        }))

        const communityComponent = new CommunityComponent(
            tokenEncryptorMock(),
            formsApiMock(),
            mailComponentMock(),
            spicedDatabaseMock()
        )

        // Act
        const result = await communityComponent.createCommunity("encrypted")

        // Assert
        expect(decrypt).toBeCalledWith("encrypted")
        expect(getAnswers).toBeCalledWith(Forms.createCommunity.formId, "decrypted")
        expect(createCommunity).toBeCalledWith({
            title: "community title",
            publicLink: "public link",
            creator: {
                firstName: "firstName",
                lastName:"lastName",
                emailAddress: "a@b.com",
                phoneNumber: "123",
                website:"com.com"
            }
        })
        expect(result).toEqual({
            communityInvitationLink: `${Url.getBaseUrl()}/community/encrypted`
        })
    })
})