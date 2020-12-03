import { MailComponent } from "../index"
import { MailChimp } from "../../constants"

jest.unmock("axios")

function getLinkMarkup(suffix = "") {
    const invitationLink = "https://a.b.com/" + suffix
    return `<a href="${invitationLink}">${invitationLink}</a>`
}

export default describe("MailComponent", () => {
    test("renderTemplate: matched", async () => {
        // Arrange
        const mail = new MailComponent()
        const mailTemplate = MailChimp.Templates.matched

        // Act
        const result = await mail.renderTemplate(mailTemplate.name, [
            {
                name: mailTemplate.fields.matchedUserFirstName,
                content: "matchedUserName"
            },
            {
                name: mailTemplate.fields.matchedUserEmail,
                content: "matchedUserEmail"
            },
            {
                name: mailTemplate.fields.matchedUserPhone,
                content: "matchedUserPhone"
            },
            {
                name: mailTemplate.fields.communityTitle,
                content: "communityTitle"
            }
        ])

        // Assert
        expect(result.html).toMatchSnapshot()
    })

    test("renderTemplate: communityCreated", async () => {
        // Arrange
        const mail = new MailComponent()
        const mailTemplate = MailChimp.Templates.communityCreated

        // Act
        const result = await mail.renderTemplate(mailTemplate.name, [
            {
                name: mailTemplate.fields.communityInvitationLink,
                content: getLinkMarkup()
            },
            {
                name: mailTemplate.fields.communityTitle,
                content: "communityTitle"
            }
        ])

        // Assert
        expect(result.html).toMatchSnapshot()
    })

    test("renderTemplate: communityJoined", async () => {
        // Arrange
        const mail = new MailComponent()
        const mailTemplate = MailChimp.Templates.communityJoined

        // Act
        const result = await mail.renderTemplate(mailTemplate.name, [
            {
                name: mailTemplate.fields.communityTitle,
                content: "communityTitle"
            }
        ])

        // Assert
        expect(result.html).toMatchSnapshot()
    })

    test("renderTemplate: joinCommunityConfirmation", async () => {
        // Arrange
        const mail = new MailComponent()
        const mailTemplate = MailChimp.Templates.joinCommunityConfirmation

        // Act
        const result = await mail.renderTemplate(mailTemplate.name, [
            {
                name: mailTemplate.fields.joinCommunityConfirmationUrl,
                content: getLinkMarkup()
            }
        ])

        // Assert
        expect(result.html).toMatchSnapshot()
    })

    test("renderTemplate: createCommunityConfirmation", async () => {
        // Arrange
        const mail = new MailComponent()
        const mailTemplate = MailChimp.Templates.createCommunityConfirmation

        // Act
        const result = await mail.renderTemplate(mailTemplate.name, [
            {
                name: mailTemplate.fields.createCommunityConfirmationUrl,
                content: getLinkMarkup()
            }
        ])

        // Assert
        expect(result.html).toMatchSnapshot()
    })

    test("renderTemplate: optIn", async () => {
        // Arrange
        const mail = new MailComponent()
        const mailTemplate = MailChimp.Templates.optIn

        // Act
        const result = await mail.renderTemplate(mailTemplate.name, [
            {
                name: mailTemplate.fields.communityTitle,
                content: "communityTitle"
            },
            {
                name: mailTemplate.fields.yesUrl,
                content: getLinkMarkup("yes")
            },
            {
                name: mailTemplate.fields.noUrl,
                content: getLinkMarkup("no")
            }
        ])

        // Assert
        expect(result.html).toMatchSnapshot()
    })
})
