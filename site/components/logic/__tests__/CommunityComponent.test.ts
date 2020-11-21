import { CommunityComponent } from "../CommunityComponent"
import { Forms, MailChimp, Url } from "../../constants"
import { EntityAlreadyExists } from "../../database/spicedDatabase"
import {
    givenFormsApi,
    givenMailComponent,
    givenSpicedDatabase,
    givenTokenEncryptor,
    givenUrlBuilder
} from "../../testUtils"
import { url } from "inspector"

const answers = [
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
]


export default describe("CommunityComponent", () => {
    test("sendJoinCommunityConfirmationEmail", async () => {
        // Arrange
        const { mock: urlBuilder, getJoinCommunityConfirmationUrl } = givenUrlBuilder()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: spicedDatabaseMock } = givenSpicedDatabase()
        const { mock: formsApiMock } = givenFormsApi()

        getJoinCommunityConfirmationUrl.mockImplementation(() => ("url"))

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder())

        // Act
        await communityComponent.sendJoinCommunityConfirmationEmail("id", "a@b.com", "key")

        // Assert
        expect(sendTemplate).toBeCalledWith(
            "a@b.com",
            "Community creation confirmation",
            "contact@wowyougotamatch.com",
            MailChimp.Templates.joinCommunityConfirmation.name,
            [{
                name: MailChimp.Templates.joinCommunityConfirmation.fields.joinCommunityConfirmationUrl,
                content: "<a href=\"url\">Click me</a>"
            }]
        )
    })

    test("sendCreateCommunityConfirmationEmail", async () => {
        // Arrange
        const { mock: urlBuilder, getCreateCommunityConfirmationUrl } = givenUrlBuilder()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: spicedDatabaseMock } = givenSpicedDatabase()
        const { mock: formsApiMock } = givenFormsApi()

        getCreateCommunityConfirmationUrl.mockImplementation(() => ("url"))

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder())

        // Act
        await communityComponent.sendCreateCommunityConfirmationEmail("id", "a@b.com")

        // Assert
        expect(sendTemplate).toBeCalledWith(
            "a@b.com",
            "Community creation confirmation",
            "contact@wowyougotamatch.com",
            MailChimp.Templates.createCommunityConfirmation.name,
            [{
                name: MailChimp.Templates.createCommunityConfirmation.fields.createCommunityConfirmationUrl,
                content: "<a href=\"url\">Click me</a>"
            }]
        )
    })

    test("createCommunity", async () => {
        // Arrange
        const { mock: spicedDatabaseMock, createCommunity } = givenSpicedDatabase()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: formsApiMock, getAnswers } = givenFormsApi()
        const { mock: urlBuilder, getCommunityInvitationUrl } = givenUrlBuilder()

        getCommunityInvitationUrl.mockImplementation(() => ("url"))
        getAnswers.mockImplementation(() => answers)

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder())

        // Act
        const result = await communityComponent.createCommunity("formResponseId")

        // Assert
        expect(getAnswers).toBeCalledWith(Forms.createCommunity.formId, "formResponseId")

        expect(createCommunity).toBeCalledWith({
            title: "community title",
            publicLink: "public link",
            typeFormResponseId: "formResponseId",
            creator: {
                firstName: "firstName",
                lastName: "lastName",
                emailAddress: "a@b.com",
                phoneNumber: "123",
                website: "com.com"
            }
        })

        expect(sendTemplate).toBeCalledWith(
            "a@b.com",
            "Community created",
            MailChimp.from,
            MailChimp.Templates.communityCreated.name,
            [{
                name: MailChimp.Templates.communityCreated.fields.communityTitle,
                content: "community title"
            }, {
                name: MailChimp.Templates.communityCreated.fields.communityInvitationLink,
                content: "<a href=\"url\">url</a>"
            }]
        )

        expect(result).toEqual({
            communityInvitationLink: "url"
        })

    })

    test("should return error if community already exists", async () => {
        // Arrange
        const { mock: spicedDatabaseMock, createCommunity } = givenSpicedDatabase()
        const { mock: urlBuilder } = givenUrlBuilder()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: formsApiMock, getAnswers } = givenFormsApi()

        getAnswers.mockImplementation(() => answers)
        createCommunity.mockImplementation(() => {
            throw new EntityAlreadyExists("")
        })

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder())

        // Act
        await expect(communityComponent.createCommunity("encrypted"))
            .rejects.toBeInstanceOf(EntityAlreadyExists)
    })

    test("findCommunityByCommunityKey", async () => {
        // Arrange
        const { mock: spicedDatabaseMock, getCommunityById } = givenSpicedDatabase()
        const { mock: urlBuilder } = givenUrlBuilder()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: formsApiMock, getAnswers } = givenFormsApi()

        getAnswers.mockImplementation(() => answers)

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder())

        // Act
        await communityComponent.findCommunityByCommunityKey("communityKey")

        // Assert
        expect(getCommunityById).toBeCalledWith("communityKey")
    })
})