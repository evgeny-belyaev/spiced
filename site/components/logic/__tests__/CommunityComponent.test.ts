import { CommunityComponent } from "../CommunityComponent"
import { Forms, MailChimp } from "../../constants"
import { givenFormsApi, givenMailComponent, givenMatcher, givenSpicedDatabase, givenUrlBuilder } from "../../testUtils"
import { templateField } from "../../mail"

const answersJoin = {
    answers: [
        {
            "field": {
                "id": Forms.joinCommunity.answers.memberFirstName,
                "ref": "b78462b6-51a1-4971-ac3e-435f6d6bd2e6",
                "type": "short_text"
            },
            "type": "text",
            "text": "asdf"
        },
        {
            "field": {
                "id": Forms.joinCommunity.answers.memberLastName,
                "ref": "9547e114-21ab-4727-9e98-283fe992303b",
                "type": "short_text"
            },
            "type": "text",
            "text": "fdsa"
        },
        {
            "field": {
                "id": Forms.joinCommunity.answers.memberEmailAddress,
                "ref": "a46913210c42aaf5",
                "type": "email"
            },
            "type": "email",
            "email": "a@b.c"
        },
        {
            "field": {
                "id": Forms.joinCommunity.answers.memberPhoneNumber,
                "ref": "b08d4ba443cad868",
                "type": "phone_number"
            },
            "type": "phone_number",
            "phone_number": "+79819861819"
        },
        {
            "field": {
                "id": Forms.joinCommunity.answers.memberWebsite,
                "ref": "d9e7f7cb-084c-43bc-b04b-67c209c5d2f2",
                "type": "website"
            },
            "type": "url",
            "url": "https://asdf.com"
        }
    ]
}


const answersCreate = {
    answers: [
        {
            "field": {
                "id": Forms.createCommunity.answers.creatorFirstName,
                "ref": "b78462b6-51a1-4971-ac3e-435f6d6bd2e6",
                "type": "short_text"
            },
            "type": "text",
            "text": "firstName"
        },
        {
            "field": {
                "id": Forms.createCommunity.answers.creatorLastName,
                "ref": "9547e114-21ab-4727-9e98-283fe992303b",
                "type": "short_text"
            },
            "type": "text",
            "text": "lastName"
        },
        {
            "field": {
                "id": Forms.createCommunity.answers.communityTitle,
                "ref": "8f6d301d1719787f",
                "type": "long_text"
            },
            "type": "text",
            "text": "community title"
        },
        {
            "field": {
                "id": Forms.createCommunity.answers.communityPublicLink,
                "ref": "934209e4b4192144",
                "type": "website"
            },
            "type": "url",
            "url": "public link"
        },
        {
            "field": {
                "id": Forms.createCommunity.answers.creatorEmailAddress,
                "ref": "a46913210c42aaf5",
                "type": "email"
            },
            "type": "email",
            "email": "a@b.com"
        },
        {
            "field": {
                "id": Forms.createCommunity.answers.creatorPhoneNumber,
                "ref": "b08d4ba443cad868",
                "type": "phone_number"
            },
            "type": "phone_number",
            "phone_number": "123"
        },
        {
            "field": {
                "id": Forms.createCommunity.answers.creatorWebsite,
                "ref": "d9e7f7cb-084c-43bc-b04b-67c209c5d2f2",
                "type": "website"
            },
            "type": "url",
            "url": "com.com"
        }
    ]
}


const response = {
    "total_items": 8,
    "page_count": 1,
    "items": [
        {
            "landing_id": "eli8isxk856vsacygwnsy2xnyqeli8is",
            "token": "eli8isxk856vsacygwnsy2xnyqeli8is",
            "response_id": "eli8isxk856vsacygwnsy2xnyqeli8is",
            "landed_at": "2020-11-21T12:15:40Z",
            "submitted_at": "2020-11-21T12:16:08Z",
            "metadata": {
                "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36",
                "platform": "other",
                "referer": "https://radmir765811.typeform.com/to/Y6665JuG?communityTitle=33&typeform-embed=embed-widget&embed-hide-footer=true&embed-hide-headers=true&embed-opacity=100&typeform-embed-id=kf5z2",
                "network_id": "70cde7363d",
                "browser": "default"
            },
            "hidden": {
                "communityid": "communityKey",
                "communitytitle": "33"
            },
            "calculated": {
                "score": 0
            },
            "answers": [
                {
                    "field": {
                        "id": Forms.joinCommunity.answers.memberFirstName,
                        "ref": "b78462b6-51a1-4971-ac3e-435f6d6bd2e6",
                        "type": "short_text"
                    },
                    "type": "text",
                    "text": "sdfsd"
                },
                {
                    "field": {
                        "id": Forms.joinCommunity.answers.memberLastName,
                        "ref": "9547e114-21ab-4727-9e98-283fe992303b",
                        "type": "short_text"
                    },
                    "type": "text",
                    "text": "sfsdfsd"
                },
                {
                    "field": {
                        "id": Forms.joinCommunity.answers.memberEmailAddress,
                        "ref": "a46913210c42aaf5",
                        "type": "email"
                    },
                    "type": "email",
                    "email": "evgeny.belyaev@gmail.com"
                },
                {
                    "field": {
                        "id": Forms.joinCommunity.answers.memberPhoneNumber,
                        "ref": "b08d4ba443cad868",
                        "type": "phone_number"
                    },
                    "type": "phone_number",
                    "phone_number": "+12015555555"
                }
            ]
        }
    ]
}

const response_no_communityId = {
    "total_items": 8,
    "page_count": 1,
    "items": [
        {
            "landing_id": "eli8isxk856vsacygwnsy2xnyqeli8is",
            "token": "eli8isxk856vsacygwnsy2xnyqeli8is",
            "response_id": "eli8isxk856vsacygwnsy2xnyqeli8is",
            "landed_at": "2020-11-21T12:15:40Z",
            "submitted_at": "2020-11-21T12:16:08Z",
            "metadata": {
                "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36",
                "platform": "other",
                "referer": "https://radmir765811.typeform.com/to/Y6665JuG?communityTitle=33&typeform-embed=embed-widget&embed-hide-footer=true&embed-hide-headers=true&embed-opacity=100&typeform-embed-id=kf5z2",
                "network_id": "70cde7363d",
                "browser": "default"
            },
            "hidden": {
                "communityid": "",
                "communitytitle": "33"
            },
            "calculated": {
                "score": 0
            },
            "answers": [
                {
                    "field": {
                        "id": "yTfniwfEZHmy",
                        "ref": "b78462b6-51a1-4971-ac3e-435f6d6bd2e6",
                        "type": "short_text"
                    },
                    "type": "text",
                    "text": "sdfsd"
                },
                {
                    "field": {
                        "id": "7pfMxKZlyBqe",
                        "ref": "9547e114-21ab-4727-9e98-283fe992303b",
                        "type": "short_text"
                    },
                    "type": "text",
                    "text": "sfsdfsd"
                },
                {
                    "field": {
                        "id": "fWuSaWrKCVbZ",
                        "ref": "a46913210c42aaf5",
                        "type": "email"
                    },
                    "type": "email",
                    "email": "evgeny.belyaev@gmail.com"
                },
                {
                    "field": {
                        "id": "3kIm7gd9aPCl",
                        "ref": "b08d4ba443cad868",
                        "type": "phone_number"
                    },
                    "type": "phone_number",
                    "phone_number": "+12015555555"
                }
            ]
        }
    ]
}


export default describe("CommunityComponent", () => {
    test("sendJoinCommunityConfirmationEmail", async () => {
        // Arrange
        const { mock: urlBuilder, getJoinCommunityConfirmationUrl } = givenUrlBuilder()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: spicedDatabaseMock, getCommunityById } = givenSpicedDatabase()
        const { mock: formsApiMock, getAnswers } = givenFormsApi()
        const { mock: matcher } = givenMatcher()

        getJoinCommunityConfirmationUrl.mockImplementation(() => ("url"))
        getAnswers.mockImplementation(() => (Promise.resolve(response.items[0])))
        getCommunityById.mockImplementation(() => ({
            title: "communityTitle"
        }))

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())

        function markup(url: string) {
            return `
            <td> <!--[if mso]>
                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                             xmlns:w="urn:schemas-microsoft-com:office:word"
                             href="${url}"
                             style="height:66px;v-text-anchor:middle;mso-wrap-style:none;mso-position-horizontal:center;"
                             arcsize="9%" stroke="f" fillcolor="#1f5bff">
                    <w:anchorlock/>
                    <center style="text-decoration: none; padding: 20px 42px; font-size: 19px; text-align: center; font-weight: bold; font-family:Helvetica Neue, Helvetica, Arial, sans-serif; width: 100%;color:#ffffff;">
                        Verify email address
                    </center>
                </v:roundrect> <![endif]--> <!--[if !mso]--> <a
                        style="display: table-cell; text-decoration: none; padding: 20px 42px; font-size: 19px; text-align: center; font-weight: bold; font-family:Helvetica Neue, Helvetica, Arial, sans-serif; width: 100%;color:#ffffff; border:0px solid ; background-color:#1f5bff; border-radius: 3px;"
                        href="${url}"> Verify email address </a> <!--[endif]-->
            </td>        
        `
        }

        // Act
        await communityComponent.sendJoinCommunityConfirmationEmail("formResponseId", "a@b.com")

        // Assert
        expect(getJoinCommunityConfirmationUrl).toBeCalledWith("communityKey", "formResponseId")
        expect(sendTemplate).toBeCalledWith(
            "a@b.com",
            "You are about to join community",
            MailChimp.from,
            MailChimp.Templates.joinCommunityConfirmation.name,
            [
                {
                    name: MailChimp.Templates.joinCommunityConfirmation.fields.communityTitle,
                    content: "communityTitle"
                },
                {
                    name: MailChimp.Templates.joinCommunityConfirmation.fields.userFirstName,
                    content: "sdfsd"
                },
                {
                    name: MailChimp.Templates.joinCommunityConfirmation.fields.joinCommunityConfirmationUrl,
                    content: markup("url")
                }]
        )
    })

    test("sendJoinCommunityConfirmationEmail should throw for invalid arguments", async () => {
        // Arrange
        const { mock: urlBuilder } = givenUrlBuilder()
        const { mock: mailComponentMock } = givenMailComponent()
        const { mock: spicedDatabaseMock, getCommunityById } = givenSpicedDatabase()
        const { mock: formsApiMock, getResponse } = givenFormsApi()
        const { mock: matcher } = givenMatcher()

        getResponse.mockImplementation(() => Promise.resolve(response))

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())

        // Act Assert
        await expect(
            communityComponent.sendJoinCommunityConfirmationEmail("", "")
        ).rejects.toEqual(new Error("Invalid argument"))
    })

    test("sendJoinCommunityConfirmationEmail should throw for invalid arguments no community id in webhook", async () => {
        // Arrange
        const { mock: urlBuilder } = givenUrlBuilder()
        const { mock: mailComponentMock } = givenMailComponent()
        const { mock: spicedDatabaseMock } = givenSpicedDatabase()
        const { mock: formsApiMock, getResponse } = givenFormsApi()
        const { mock: matcher } = givenMatcher()

        getResponse.mockImplementation(() => Promise.resolve(response_no_communityId))

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())

        // Act Assert
        await expect(
            communityComponent.sendJoinCommunityConfirmationEmail("communityKey", "formResponseId")
        ).rejects.toEqual(new Error("Invalid argument"))
    })

    test("sendCreateCommunityConfirmationEmail", async () => {
        // Arrange
        const { mock: urlBuilder, getCreateCommunityConfirmationUrl } = givenUrlBuilder()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: spicedDatabaseMock } = givenSpicedDatabase()
        const { mock: formsApiMock, getAnswers } = givenFormsApi()
        const { mock: matcher } = givenMatcher()

        getCreateCommunityConfirmationUrl.mockImplementation(() => ("url"))
        getAnswers.mockImplementation(() => answersCreate)

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())

        // Act
        await communityComponent.sendCreateCommunityConfirmationEmail("id", "a@b.com")

        // Assert
        const url = "url"
        const markup = `
            <td> <!--[if mso]>
                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                             xmlns:w="urn:schemas-microsoft-com:office:word"
                             href="${url}"
                             style="height:66px;v-text-anchor:middle;mso-wrap-style:none;mso-position-horizontal:center;"
                             arcsize="9%" stroke="f" fillcolor="#1f5bff">
                    <w:anchorlock/>
                    <center style="text-decoration: none; padding: 20px 42px; font-size: 19px; text-align: center; font-weight: bold; font-family:Helvetica Neue, Helvetica, Arial, sans-serif; width: 100%;color:#ffffff;">
                        Verify email address
                    </center>
                </v:roundrect> <![endif]--> <!--[if !mso]-->
                <a
                        style="display: table-cell; text-decoration: none; padding: 20px 42px; font-size: 19px; text-align: center; font-weight: bold; font-family:Helvetica Neue, Helvetica, Arial, sans-serif; width: 100%;color:#ffffff; border:0px solid ; background-color:#1f5bff; border-radius: 3px;"
                        href="${url}"> Verify email address </a> <!--[endif]-->
            </td>
        `

        expect(sendTemplate).toBeCalledWith(
            "a@b.com",
            "Your tmixed community is almost there",
            MailChimp.from,
            MailChimp.Templates.createCommunityConfirmation.name,
            [
                {
                    name: MailChimp.Templates.createCommunityConfirmation.fields.userFirstName,
                    content: "firstName"
                },
                {
                    name: MailChimp.Templates.createCommunityConfirmation.fields.createCommunityConfirmationUrl,
                    content: markup
                }]
        )
    })

    test("createCommunity", async () => {
        // Arrange
        const {
            mock: spicedDatabaseMock,
            createCommunity,
            createUser,
            createMember,
            getCommunityIdByTypeFormResponseId
        } = givenSpicedDatabase()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: formsApiMock, getAnswers } = givenFormsApi()
        const { mock: urlBuilder, getCommunityInvitationUrl } = givenUrlBuilder()
        const { mock: matcher } = givenMatcher()

        createUser.mockImplementation(() => Promise.resolve("userIdHash"))
        createMember.mockImplementation(() => Promise.resolve())
        createCommunity.mockImplementation(() => Promise.resolve("communityId"))
        getCommunityInvitationUrl.mockImplementation(() => ("url"))
        getAnswers.mockImplementation(() => answersCreate)
        getCommunityIdByTypeFormResponseId.mockImplementation(() => null)

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())

        // Act
        const result = await communityComponent.createCommunity("formResponseId")

        // Assert
        expect(getAnswers).toBeCalledWith(Forms.createCommunity.formId, "formResponseId")

        expect(createUser).toBeCalledWith({
            firstName: "firstName",
            lastName: "lastName",
            emailAddress: "a@b.com",
            phoneNumber: "123",
            website: "com.com"
        })

        expect(createCommunity).toBeCalledWith({
            title: "community title",
            publicLink: "public link",
            typeFormResponseId: "formResponseId",
            creatorUserId: "userIdHash"
        })

        expect(createMember).toBeCalledWith("communityId", "userIdHash")

        expect(sendTemplate).toBeCalledWith(
            "a@b.com",
            "Here is your community invitation link",
            MailChimp.from,
            MailChimp.Templates.communityCreated.name,
            [
                {
                    name: MailChimp.Templates.communityCreated.fields.userFirstName,
                    content: "firstName"
                },
                {
                    name: MailChimp.Templates.communityCreated.fields.communityTitle,
                    content: "community title"
                },
                {
                    name: MailChimp.Templates.communityCreated.fields.communityInvitationLink,
                    content: "<a href=\"url\">url</a>"
                }
            ]
        )

        expect(result).toEqual({
            communityTitle: "community title",
            communityInvitationLink: "url",
            alreadyExist: undefined
        })

    })

    test("should handle correctly if community already exists", async () => {
        // Arrange
        const {
            mock: spicedDatabaseMock,
            createCommunity,
            createUser,
            createMember,
            getCommunityIdByTypeFormResponseId,
            getCommunityById
        } = givenSpicedDatabase()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: formsApiMock, getAnswers } = givenFormsApi()
        const { mock: urlBuilder, getCommunityInvitationUrl } = givenUrlBuilder()
        const { mock: matcher } = givenMatcher()

        createUser.mockImplementation(() => Promise.resolve("userIdHash"))
        createMember.mockImplementation(() => Promise.resolve())
        createCommunity.mockImplementation(() => Promise.resolve("communityId"))
        getCommunityInvitationUrl.mockImplementation(() => ("url"))
        getAnswers.mockImplementation(() => answersCreate)
        getCommunityIdByTypeFormResponseId.mockImplementation(() => "existedCommunityId")
        getCommunityById.mockImplementation(() => ({
            title: "existedTitle"
        }))

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())

        // Act
        const result = await communityComponent.createCommunity("formResponseId")

        // Assert
        expect(getCommunityInvitationUrl).toBeCalledWith("existedCommunityId")
        expect(getCommunityById).toBeCalledWith("existedCommunityId")

        expect(getAnswers).toHaveBeenCalledTimes(0)
        expect(createUser).toHaveBeenCalledTimes(0)
        expect(createCommunity).toHaveBeenCalledTimes(0)
        expect(createMember).toHaveBeenCalledTimes(0)
        expect(sendTemplate).toHaveBeenCalledTimes(0)

        expect(result).toEqual({
            communityTitle: "existedTitle",
            communityInvitationLink: "url",
            alreadyExist: true
        })
    })

    test("findCommunityByCommunityKey", async () => {
        // Arrange
        const { mock: spicedDatabaseMock, getCommunityById } = givenSpicedDatabase()
        const { mock: urlBuilder } = givenUrlBuilder()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: formsApiMock, getAnswers } = givenFormsApi()
        const { mock: matcher } = givenMatcher()

        getAnswers.mockImplementation(() => answersCreate)

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())

        // Act
        await communityComponent.findCommunityById("communityKey")

        // Assert
        expect(getCommunityById).toBeCalledWith("communityKey")
    })

    test("joinCommunity", async () => {
        // Arrange
        const { mock: spicedDatabaseMock, getCommunityById, createUser, createMember } = givenSpicedDatabase()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: formsApiMock, getAnswers } = givenFormsApi()
        const { mock: urlBuilder } = givenUrlBuilder()
        const { mock: matcher, getNextTimeSpanId } = givenMatcher()
        const optIn = jest.fn()

        getCommunityById.mockImplementation(() => ({
            title: "title"
        }))
        getAnswers.mockImplementation(() => answersJoin)

        createUser.mockImplementation(() => Promise.resolve("userIdHash"))
        createMember.mockImplementation(() => Promise.resolve())
        getNextTimeSpanId.mockImplementation(() => 123)

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())
        communityComponent.optIn = optIn

        const communityId = "communityId"
        const formResponseId = "formResponseId"
        const now = Date.UTC(2020, 10, 25, 16, 59, 10, 123)

        // Act
        const result = await communityComponent.joinCommunity(communityId, formResponseId, now)

        // Assert
        expect(getCommunityById).toBeCalledWith(communityId)
        expect(getAnswers).toBeCalledWith(Forms.joinCommunity.formId, formResponseId)
        expect(createUser).toBeCalledWith({
            firstName: "asdf",
            lastName: "fdsa",
            phoneNumber: "+79819861819",
            website: "https://asdf.com",
            emailAddress: "a@b.c"
        })
        expect(createMember).toBeCalledWith(communityId, "userIdHash")
        expect(sendTemplate).toBeCalledWith(
            "a@b.c",
            "You have successfully joined title!",
            MailChimp.from,
            MailChimp.Templates.communityJoined.name,
            [
                {
                    name: MailChimp.Templates.communityJoined.fields.userFirstName,
                    content: "asdf"
                },
                {
                    name: MailChimp.Templates.communityJoined.fields.communityTitle,
                    content: "title"
                }
            ]
        )
        expect(getNextTimeSpanId).toBeCalledWith(now)
        expect(optIn).toBeCalledWith("123", communityId, "userIdHash", true)
    })

    test("joinCommunity: already joined", async () => {
        // Arrange
        const {
            mock: spicedDatabaseMock,
            getCommunityById,
            createUser,
            createMember,
            getMembers,
            getUserId
        } = givenSpicedDatabase()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: formsApiMock, getAnswers } = givenFormsApi()
        const { mock: urlBuilder } = givenUrlBuilder()
        const { mock: matcher, getNextTimeSpanId } = givenMatcher()
        const optIn = jest.fn()

        getCommunityById.mockImplementation(() => ({
            title: "title"
        }))
        getAnswers.mockImplementation(() => answersJoin)

        getMembers.mockImplementation(() => ({
            "userIdHash": true
        }))
        getUserId.mockImplementation(() => "userIdHash")

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())
        communityComponent.optIn = optIn

        const communityId = "communityId"
        const formResponseId = "formResponseId"
        const now = Date.UTC(2020, 10, 25, 16, 59, 10, 123)

        // Act
        const result = await communityComponent.joinCommunity(communityId, formResponseId, now)

        // Assert
        expect(getCommunityById).toBeCalledWith(communityId)
        expect(getAnswers).toBeCalledWith(Forms.joinCommunity.formId, formResponseId)
        expect(createUser).toHaveBeenCalledTimes(0)
        expect(createMember).toHaveBeenCalledTimes(0)
        expect(sendTemplate).toHaveBeenCalledTimes(0)
        expect(optIn).toHaveBeenCalledTimes(0)

        expect(result).toEqual({
            communityTitle: "title",
            alreadyJoined: true
        })
    })


    test("joinCommunity, should throw if no community", async () => {
        // Arrange
        const { mock: spicedDatabaseMock, getCommunityById, createUser, createMember } = givenSpicedDatabase()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: formsApiMock, getAnswers } = givenFormsApi()
        const { mock: urlBuilder } = givenUrlBuilder()
        const { mock: matcher, getNextTimeSpanId } = givenMatcher()


        getCommunityById.mockImplementation(() => null)

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())
        const communityId = "communityId"
        const formResponseId = "formResponseId"
        const now = Date.UTC(2020, 10, 25, 16, 59, 10, 123)

        // Act
        // Assert
        await expect(async () => {
            await communityComponent.joinCommunity(communityId, formResponseId, now)
        }).rejects.toThrowError("Invalid argument")

        expect(sendTemplate).toHaveBeenCalledTimes(0)
        expect(getAnswers).toHaveBeenCalledTimes(0)
        expect(createUser).toHaveBeenCalledTimes(0)
        expect(createMember).toHaveBeenCalledTimes(0)
    })

    test("monday", async () => {
        // Arrange
        const {
            mock: spicedDatabaseMock,
            getCommunitiesIds,
            getMatches,
            getUserById,
            getCommunityById,
            getOptedInCommunities,
            getOptedInUsers
        } = givenSpicedDatabase()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: formsApiMock } = givenFormsApi()
        const { mock: urlBuilder, getCommunityInvitationUrl } = givenUrlBuilder()
        const { mock: matcher, calculateMatch, saveMatches } = givenMatcher()
        const matchesGenerator = (communityId: string) => {
            switch (communityId) {
                case "communityId1": {
                    return {
                        "userId1": { matchedUserId: "userId2" },
                        "userId2": { matchedUserId: "userId1" }
                    }
                }
                case "communityId2": {
                    return {
                        "userId3": { matchedUserId: "userId4" },
                        "userId4": { matchedUserId: "userId3" },
                        "userId5": { matchedUserId: "" }
                    }
                }
            }
        }

        getCommunityInvitationUrl.mockImplementation(() => "invitationUrl")
        getOptedInCommunities.mockImplementation(() => ({
            "communityId1": true,
            "communityId2": true
        }))
        getCommunityById.mockImplementation((communityId: string) => ({
            title: `title${communityId}`
        }))
        getCommunitiesIds.mockImplementation(() => (Promise.resolve({
            "communityId1": true,
            "communityId2": true
        })))
        getOptedInUsers.mockImplementation((timeSpanId: string, communityId: string) => {
            switch (communityId) {
                case "communityId1": {
                    return {
                        "userId1": true,
                        "userId2": true,
                        "userId6": false,
                        "userId7": false
                    }
                }
                case "communityId2": {
                    return {
                        "userId3": true,
                        "userId4": true,
                        "userId5": true
                    }
                }
            }
        })
        getUserById.mockImplementation((userId: string) => {
            if (userId) {
                return Promise.resolve({
                    emailAddress: `${userId}@b.c`,
                    firstName: `${userId}f`,
                    lastName: `${userId}l`,
                    phoneNumber: `${userId}p`,
                    website: `${userId}w`
                })
            } else {
                return Promise.resolve(null)
            }
        })
        calculateMatch.mockImplementation(matchesGenerator)
        getMatches.mockImplementation(matchesGenerator)

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())
        const now = new Date(2020, 10, 25, 16, 59, 10)

        // Act Assert
        await expect(communityComponent.monday("timeSpanId")).resolves.toEqual({
            "communityId1": {
                "userId1": { "matchedUserId": "userId2" },
                "userId2": { "matchedUserId": "userId1" }
            },
            "communityId2": {
                "userId3": { "matchedUserId": "userId4" },
                "userId4": { "matchedUserId": "userId3" },
                "userId5": { "matchedUserId": "" }
            }
        })

        // Assert
        expect(getOptedInUsers.mock.calls).toEqual([
            ["timeSpanId", "communityId1"],
            ["timeSpanId", "communityId2"]
        ])
        expect(calculateMatch.mock.calls).toEqual([
            ["communityId1", "timeSpanId", ["userId1", "userId2"]],
            ["communityId2", "timeSpanId", ["userId3", "userId4", "userId5"]]
        ])
        expect(saveMatches.mock.calls).toEqual([
            [matchesGenerator("communityId1"), "communityId1", "timeSpanId"],
            [matchesGenerator("communityId2"), "communityId2", "timeSpanId"]
        ])

        const mailTemplate = MailChimp.Templates.matched
        const mailTemplate2 = MailChimp.Templates.noMatch

        const subject1 = "Your tmixed match for this week from titlecommunityId1"
        const subject2 = "Your tmixed match for this week from titlecommunityId2"

        function givenContent(firstName: string, matchedFirstName: string, matchedLastName: string, email: string, phoneNumber: string, communityTitle: string, website: string) {
            return [
                templateField(mailTemplate.fields.userFirstName, firstName),
                templateField(mailTemplate.fields.matchedUserEmail, email),
                templateField(mailTemplate.fields.matchedUserPhone, phoneNumber),
                templateField(mailTemplate.fields.matchedUserFirstName, matchedFirstName),
                templateField(mailTemplate.fields.matchedUserLastName, matchedLastName),
                templateField(mailTemplate.fields.matchedUserProfileUrl, website),
                templateField(mailTemplate.fields.communityTitle, communityTitle)
            ]
        }

        function givenNoMatchContent(firstName: string, invitationLink: string, communityTitle: string) {
            return [
                templateField(mailTemplate2.fields.userFirstName, firstName),
                templateField(mailTemplate2.fields.communityInvitationLink, invitationLink),
                templateField(mailTemplate2.fields.communityTitle, communityTitle)
            ]
        }

        console.log(JSON.stringify(sendTemplate.mock.calls))

        expect(sendTemplate).toHaveBeenCalledWith("userId5@b.c", subject2, MailChimp.from, mailTemplate2.name,
            givenNoMatchContent("userId5f", "<a href=\"invitationUrl\">invitationUrl</a>", "titlecommunityId2"))

        expect(sendTemplate).toHaveBeenCalledWith("userId3@b.c", subject2, MailChimp.from, mailTemplate.name,
            givenContent("userId3f", "userId4f", "userId4l", "userId4@b.c",
                "userId4p", "titlecommunityId2", "userId4w")
        )

        expect(sendTemplate).toHaveBeenCalledWith("userId4@b.c", subject2, MailChimp.from, mailTemplate.name,
            givenContent("userId4f", "userId3f", "userId3l", "userId3@b.c",
                "userId3p", "titlecommunityId2", "userId3w")
        )

        expect(sendTemplate).toHaveBeenCalledWith("userId1@b.c", subject1, MailChimp.from, mailTemplate.name,
            givenContent("userId1f", "userId2f", "userId2l", "userId2@b.c",
                "userId2p", "titlecommunityId1", "userId2w"))

        expect(sendTemplate).toHaveBeenCalledWith("userId2@b.c", subject1, MailChimp.from, mailTemplate.name,
            givenContent("userId2f", "userId1f", "userId1l", "userId1@b.c",
                "userId1p", "titlecommunityId1", "userId1w")
        )

        expect(sendTemplate).toHaveBeenCalledTimes(5)

    })

    test("monday one community", async () => {
        // Arrange
        const {
            mock: spicedDatabaseMock,
            getCommunitiesIds,
            getMatches,
            getUserById,
            getCommunityById,
            getOptedInCommunities,
            getOptedInUsers
        } = givenSpicedDatabase()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: formsApiMock } = givenFormsApi()
        const { mock: urlBuilder, getCommunityInvitationUrl } = givenUrlBuilder()
        const { mock: matcher, calculateMatch, saveMatches } = givenMatcher()
        const matchesGenerator = (communityId: string) => {
            switch (communityId) {
                case "communityId1": {
                    return {
                        "userId1": { matchedUserId: "userId2" },
                        "userId2": { matchedUserId: "userId1" }
                    }
                }
                case "communityId2": {
                    return {
                        "userId3": { matchedUserId: "userId4" },
                        "userId4": { matchedUserId: "userId3" },
                        "userId5": { matchedUserId: "" }
                    }
                }
            }
        }

        getCommunityInvitationUrl.mockImplementation(() => "invitationUrl")
        getOptedInCommunities.mockImplementation(() => ({
            "communityId1": true,
            "communityId2": true
        }))
        getCommunityById.mockImplementation((communityId: string) => ({
            title: `title${communityId}`
        }))
        getCommunitiesIds.mockImplementation(() => (Promise.resolve({
            "communityId1": true,
            "communityId2": true
        })))
        getOptedInUsers.mockImplementation((timeSpanId: string, communityId: string) => {
            switch (communityId) {
                case "communityId1": {
                    return {
                        "userId1": true,
                        "userId2": true,
                        "userId6": false,
                        "userId7": false
                    }
                }
                case "communityId2": {
                    return {
                        "userId3": true,
                        "userId4": true,
                        "userId5": true
                    }
                }
            }
        })
        getUserById.mockImplementation((userId: string) => {
            if (userId) {
                return Promise.resolve({
                    emailAddress: `${userId}@b.c`,
                    firstName: `${userId}f`,
                    lastName: `${userId}l`,
                    phoneNumber: `${userId}p`,
                    website: `${userId}w`
                })
            } else {
                return Promise.resolve(null)
            }
        })
        calculateMatch.mockImplementation(matchesGenerator)
        getMatches.mockImplementation(matchesGenerator)

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())
        const now = new Date(2020, 10, 25, 16, 59, 10)

        // Act Assert
        await expect(communityComponent.monday("timeSpanId", "communityId1")).resolves.toEqual({
            "communityId1": {
                "userId1": { "matchedUserId": "userId2" },
                "userId2": { "matchedUserId": "userId1" }
            }
        })

        // Assert
        expect(getOptedInUsers.mock.calls).toEqual([
            ["timeSpanId", "communityId1"]
        ])
        expect(calculateMatch.mock.calls).toEqual([
            ["communityId1", "timeSpanId", ["userId1", "userId2"]]
        ])
        expect(saveMatches.mock.calls).toEqual([
            [matchesGenerator("communityId1"), "communityId1", "timeSpanId"]
        ])

        const mailTemplate = MailChimp.Templates.matched
        const mailTemplate2 = MailChimp.Templates.noMatch

        const subject1 = "Your tmixed match for this week from titlecommunityId1"

        function givenContent(firstName: string, matchedFirstName: string, matchedLastName: string, email: string, phoneNumber: string, communityTitle: string, website: string) {
            return [
                templateField(mailTemplate.fields.userFirstName, firstName),
                templateField(mailTemplate.fields.matchedUserEmail, email),
                templateField(mailTemplate.fields.matchedUserPhone, phoneNumber),
                templateField(mailTemplate.fields.matchedUserFirstName, matchedFirstName),
                templateField(mailTemplate.fields.matchedUserLastName, matchedLastName),
                templateField(mailTemplate.fields.matchedUserProfileUrl, website),
                templateField(mailTemplate.fields.communityTitle, communityTitle)
            ]
        }

        function givenNoMatchContent(firstName: string, invitationLink: string, communityTitle: string) {
            return [
                templateField(mailTemplate2.fields.userFirstName, firstName),
                templateField(mailTemplate2.fields.communityInvitationLink, invitationLink),
                templateField(mailTemplate2.fields.communityTitle, communityTitle)
            ]
        }

        console.log(JSON.stringify(sendTemplate.mock.calls))

        expect(sendTemplate).toHaveBeenCalledWith("userId1@b.c", subject1, MailChimp.from, mailTemplate.name,
            givenContent("userId1f", "userId2f", "userId2l", "userId2@b.c",
                "userId2p", "titlecommunityId1", "userId2w"))

        expect(sendTemplate).toHaveBeenCalledWith("userId2@b.c", subject1, MailChimp.from, mailTemplate.name,
            givenContent("userId2f", "userId1f", "userId1l", "userId1@b.c",
                "userId1p", "titlecommunityId1", "userId1w")
        )

        expect(sendTemplate).toHaveBeenCalledTimes(2)

    })


    test("sendOptInRequest", async () => {
        // Arrange
        const {
            mock: spicedDatabaseMock,
            getCommunitiesIds,
            getMembers,
            getMatches,
            getUserById,
            getCommunityById
        } = givenSpicedDatabase()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: formsApiMock } = givenFormsApi()
        const { mock: urlBuilder, getOptInConfirmationUrl } = givenUrlBuilder()
        const { mock: matcher } = givenMatcher()

        const mailTemplate = MailChimp.Templates.optIn
        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())

        getCommunityById.mockImplementation((communityId: string) => ({
            title: `title${communityId}`
        }))

        getCommunitiesIds.mockImplementation(() => (Promise.resolve({
            "communityId1": true,
            "communityId2": true
        })))
        getMembers.mockImplementation((communityId: string) => {
            switch (communityId) {
                case "communityId1": {
                    return {
                        "userId1": true,
                        "userId2": true
                    }
                }
                case "communityId2": {
                    return {
                        "userId3": true,
                        "userId4": true,
                        "userId5": true
                    }
                }
            }
        })
        getUserById.mockImplementation((userId: string) => {
            if (userId) {
                return Promise.resolve({
                    emailAddress: `${userId}@b.c`,
                    firstName: `${userId}f`,
                    lastName: `${userId}l`,
                    phoneNumber: `${userId}p`
                })
            } else {
                return Promise.resolve(null)
            }
        })
        getOptInConfirmationUrl.mockImplementation((communityId: string, timeSpanId: string, userId: string, optIn: boolean) => (
            `${communityId}${timeSpanId}${userId}${optIn ? "true" : "false"}`
        ))

        // Act
        await expect(communityComponent.sendOptInRequest("nextTimeSpanId")).resolves.toEqual("nextTimeSpanId")

        // Assert
        expect(getCommunityById.mock.calls).toEqual([
            ["communityId1"],
            ["communityId2"]
        ])
        expect(getMembers.mock.calls).toEqual([
            ["communityId1"],
            ["communityId2"]
        ])
        expect(getUserById.mock.calls).toEqual([
            ["userId1"],
            ["userId2"],
            ["userId3"],
            ["userId4"],
            ["userId5"]
        ])

        expect(getOptInConfirmationUrl.mock.calls).toEqual([
            ["communityId1", "nextTimeSpanId", "userId1", true],
            ["communityId1", "nextTimeSpanId", "userId1", false],

            ["communityId1", "nextTimeSpanId", "userId2", true],
            ["communityId1", "nextTimeSpanId", "userId2", false],

            ["communityId2", "nextTimeSpanId", "userId3", true],
            ["communityId2", "nextTimeSpanId", "userId3", false],

            ["communityId2", "nextTimeSpanId", "userId4", true],
            ["communityId2", "nextTimeSpanId", "userId4", false],

            ["communityId2", "nextTimeSpanId", "userId5", true],
            ["communityId2", "nextTimeSpanId", "userId5", false]
        ])

        function givenContent(userFirstName: string, communityTitle: string, noUrl: string, yesUrl: string) {
            return [
                {
                    name: mailTemplate.fields.userFirstName,
                    content: userFirstName
                },
                {
                    name: mailTemplate.fields.communityTitle,
                    content: communityTitle
                },
                {
                    name: mailTemplate.fields.yesUrl,
                    content: yesUrl
                },
                {
                    name: mailTemplate.fields.noUrl,
                    content: noUrl
                }
            ]
        }

        const subject1 = "Are you participating in titlecommunityId1 calls next week?"
        const subject2 = "Are you participating in titlecommunityId2 calls next week?"

        function yesMarkup(url: string): string {
            return `
                    <td> <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                                 xmlns:w="urn:schemas-microsoft-com:office:word"
                                 href="${url}"
                                 style="height:66px;v-text-anchor:middle;mso-wrap-style:none;mso-position-horizontal:center;"
                                 arcsize="9%" stroke="f" fillcolor="#1f5bff">
                        <w:anchorlock/>
                        <center style="text-decoration: none; padding: 20px 42px; font-size: 19px; text-align: center; font-weight: bold; font-family:Helvetica Neue, Helvetica, Arial, sans-serif; width: 100%;color:#ffffff;">
                            Yes, I'm in!
                        </center>
                    </v:roundrect> <![endif]--> <!--[if !mso]--> <a
                            style="display: table-cell; text-decoration: none; padding: 20px 42px; font-size: 19px; text-align: center; font-weight: bold; font-family:Helvetica Neue, Helvetica, Arial, sans-serif; width: 100%;color:#ffffff; border:0px solid ; background-color:#1f5bff; border-radius: 3px;"
                            href="${url}"> Yes, I'm in! </a> <!--[endif]--> </td>                
                `
        }

        function noMarkup(url: string) {
            return `
                <a href="${url}" style="">Pause all notification for 1 week</a>
                `
        }

        expect(sendTemplate.mock.calls).toEqual([
                ["userId1@b.c", subject1, MailChimp.from, mailTemplate.name,
                    givenContent("userId1f", "titlecommunityId1", noMarkup("communityId1nextTimeSpanIduserId1false"), yesMarkup("communityId1nextTimeSpanIduserId1true"))],
                ["userId2@b.c", subject1, MailChimp.from, mailTemplate.name,
                    givenContent("userId2f", "titlecommunityId1", noMarkup("communityId1nextTimeSpanIduserId2false"), yesMarkup("communityId1nextTimeSpanIduserId2true"))],
                ["userId3@b.c", subject2, MailChimp.from, mailTemplate.name,
                    givenContent("userId3f", "titlecommunityId2", noMarkup("communityId2nextTimeSpanIduserId3false"), yesMarkup("communityId2nextTimeSpanIduserId3true"))],
                ["userId4@b.c", subject2, MailChimp.from, mailTemplate.name,
                    givenContent("userId4f", "titlecommunityId2", noMarkup("communityId2nextTimeSpanIduserId4false"), yesMarkup("communityId2nextTimeSpanIduserId4true"))],
                ["userId5@b.c", subject2, MailChimp.from, mailTemplate.name,
                    givenContent("userId5f", "titlecommunityId2", noMarkup("communityId2nextTimeSpanIduserId5false"), yesMarkup("communityId2nextTimeSpanIduserId5true"))]
            ]
        )
    })


    test("sendOptInRequest single community", async () => {
        // Arrange
        const {
            mock: spicedDatabaseMock,
            getCommunitiesIds,
            getMembers,
            getMatches,
            getUserById,
            getCommunityById
        } = givenSpicedDatabase()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: formsApiMock } = givenFormsApi()
        const { mock: urlBuilder, getOptInConfirmationUrl } = givenUrlBuilder()
        const { mock: matcher } = givenMatcher()

        const mailTemplate = MailChimp.Templates.optIn
        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())

        getCommunityById.mockImplementation((communityId: string) => ({
            title: `title${communityId}`
        }))

        getCommunitiesIds.mockImplementation(() => (Promise.resolve({
            "communityId1": true,
            "communityId2": true
        })))
        getMembers.mockImplementation((communityId: string) => {
            switch (communityId) {
                case "communityId1": {
                    return {
                        "userId1": true,
                        "userId2": true
                    }
                }
                case "communityId2": {
                    return {
                        "userId3": true,
                        "userId4": true,
                        "userId5": true
                    }
                }
            }
        })
        getUserById.mockImplementation((userId: string) => {
            if (userId) {
                return Promise.resolve({
                    emailAddress: `${userId}@b.c`,
                    firstName: `${userId}f`,
                    lastName: `${userId}l`,
                    phoneNumber: `${userId}p`
                })
            } else {
                return Promise.resolve(null)
            }
        })
        getOptInConfirmationUrl.mockImplementation((communityId: string, timeSpanId: string, userId: string, optIn: boolean) => (
            `${communityId}${timeSpanId}${userId}${optIn ? "true" : "false"}`
        ))

        // Act
        await expect(communityComponent.sendOptInRequest("nextTimeSpanId", "communityId1")).resolves.toEqual("nextTimeSpanId")

        // Assert
        expect(getCommunityById.mock.calls).toEqual([
            ["communityId1"]
        ])
        expect(getMembers.mock.calls).toEqual([
            ["communityId1"]
        ])
        expect(getUserById.mock.calls).toEqual([
            ["userId1"],
            ["userId2"]
        ])

        expect(getOptInConfirmationUrl.mock.calls).toEqual([
            ["communityId1", "nextTimeSpanId", "userId1", true],
            ["communityId1", "nextTimeSpanId", "userId1", false],

            ["communityId1", "nextTimeSpanId", "userId2", true],
            ["communityId1", "nextTimeSpanId", "userId2", false]
        ])

        function givenContent(userFirstName: string, communityTitle: string, noUrl: string, yesUrl: string) {
            return [
                {
                    name: mailTemplate.fields.userFirstName,
                    content: userFirstName
                },
                {
                    name: mailTemplate.fields.communityTitle,
                    content: communityTitle
                },
                {
                    name: mailTemplate.fields.yesUrl,
                    content: yesUrl
                },
                {
                    name: mailTemplate.fields.noUrl,
                    content: noUrl
                }
            ]
        }

        const subject1 = "Are you participating in titlecommunityId1 calls next week?"

        function yesMarkup(url: string): string {
            return `
                    <td> <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                                 xmlns:w="urn:schemas-microsoft-com:office:word"
                                 href="${url}"
                                 style="height:66px;v-text-anchor:middle;mso-wrap-style:none;mso-position-horizontal:center;"
                                 arcsize="9%" stroke="f" fillcolor="#1f5bff">
                        <w:anchorlock/>
                        <center style="text-decoration: none; padding: 20px 42px; font-size: 19px; text-align: center; font-weight: bold; font-family:Helvetica Neue, Helvetica, Arial, sans-serif; width: 100%;color:#ffffff;">
                            Yes, I'm in!
                        </center>
                    </v:roundrect> <![endif]--> <!--[if !mso]--> <a
                            style="display: table-cell; text-decoration: none; padding: 20px 42px; font-size: 19px; text-align: center; font-weight: bold; font-family:Helvetica Neue, Helvetica, Arial, sans-serif; width: 100%;color:#ffffff; border:0px solid ; background-color:#1f5bff; border-radius: 3px;"
                            href="${url}"> Yes, I'm in! </a> <!--[endif]--> </td>                
                `
        }

        function noMarkup(url: string) {
            return `
                <a href="${url}" style="">Pause all notification for 1 week</a>
                `
        }

        expect(sendTemplate.mock.calls).toEqual([
                ["userId1@b.c", subject1, MailChimp.from, mailTemplate.name,
                    givenContent("userId1f", "titlecommunityId1", noMarkup("communityId1nextTimeSpanIduserId1false"), yesMarkup("communityId1nextTimeSpanIduserId1true"))],
                ["userId2@b.c", subject1, MailChimp.from, mailTemplate.name,
                    givenContent("userId2f", "titlecommunityId1", noMarkup("communityId1nextTimeSpanIduserId2false"), yesMarkup("communityId1nextTimeSpanIduserId2true"))]
            ]
        )
    })
})