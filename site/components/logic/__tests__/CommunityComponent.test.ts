import { CommunityComponent } from "../CommunityComponent"
import { Forms, MailChimp } from "../../constants"
import { givenFormsApi, givenMailComponent, givenMatcher, givenSpicedDatabase, givenUrlBuilder } from "../../testUtils"
import { EntityAlreadyExists } from "../../database/entityAlreadyExists"

const answersJoin = [
    {
        "field": {
            "id": "yTfniwfEZHmy",
            "ref": "b78462b6-51a1-4971-ac3e-435f6d6bd2e6",
            "type": "short_text"
        },
        "type": "text",
        "text": "asdf"
    },
    {
        "field": {
            "id": "7pfMxKZlyBqe",
            "ref": "9547e114-21ab-4727-9e98-283fe992303b",
            "type": "short_text"
        },
        "type": "text",
        "text": "fdsa"
    },
    {
        "field": {
            "id": "fWuSaWrKCVbZ",
            "ref": "a46913210c42aaf5",
            "type": "email"
        },
        "type": "email",
        "email": "a@b.c"
    },
    {
        "field": {
            "id": "3kIm7gd9aPCl",
            "ref": "b08d4ba443cad868",
            "type": "phone_number"
        },
        "type": "phone_number",
        "phone_number": "+79819861819"
    },
    {
        "field": {
            "id": "bKxH0PJxunet",
            "ref": "d9e7f7cb-084c-43bc-b04b-67c209c5d2f2",
            "type": "website"
        },
        "type": "url",
        "url": "https://asdf.com"
    }
]

const answersCreate = [
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
        const { mock: spicedDatabaseMock } = givenSpicedDatabase()
        const { mock: formsApiMock, getResponse } = givenFormsApi()
        const { mock: matcher } = givenMatcher()

        getJoinCommunityConfirmationUrl.mockImplementation(() => ("url"))
        getResponse.mockImplementation(() => Promise.resolve(response))

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())

        // Act
        await communityComponent.sendJoinCommunityConfirmationEmail("formResponseId", "a@b.com")

        // Assert
        expect(getJoinCommunityConfirmationUrl).toBeCalledWith("communityKey", "formResponseId")
        expect(sendTemplate).toBeCalledWith(
            "a@b.com",
            "Wow! Follow the link to join!",
            "contact@wowyougotamatch.com",
            MailChimp.Templates.joinCommunityConfirmation.name,
            [{
                name: MailChimp.Templates.joinCommunityConfirmation.fields.joinCommunityConfirmationUrl,
                content: "<a href=\"url\">Click me</a>"
            }]
        )
    })

    test("sendJoinCommunityConfirmationEmail should throw for invalid arguments", async () => {
        // Arrange
        const { mock: urlBuilder } = givenUrlBuilder()
        const { mock: mailComponentMock } = givenMailComponent()
        const { mock: spicedDatabaseMock } = givenSpicedDatabase()
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
        const { mock: formsApiMock } = givenFormsApi()
        const { mock: matcher } = givenMatcher()

        getCreateCommunityConfirmationUrl.mockImplementation(() => ("url"))

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())

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
        const { mock: spicedDatabaseMock, createCommunity, createUser, createMember } = givenSpicedDatabase()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: formsApiMock, getAnswers } = givenFormsApi()
        const { mock: urlBuilder, getCommunityInvitationUrl } = givenUrlBuilder()
        const { mock: matcher } = givenMatcher()

        createUser.mockImplementation(() => Promise.resolve("userIdHash"))
        createMember.mockImplementation(() => Promise.resolve())
        createCommunity.mockImplementation(() => Promise.resolve("communityId"))
        getCommunityInvitationUrl.mockImplementation(() => ("url"))
        getAnswers.mockImplementation(() => answersCreate)

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
        const { mock: matcher } = givenMatcher()

        getAnswers.mockImplementation(() => answersCreate)
        createCommunity.mockImplementation(() => {
            throw new EntityAlreadyExists("")
        })

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())

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
        const { mock: matcher } = givenMatcher()

        getCommunityById.mockImplementation(() => ({
            title: "title"
        }))
        getAnswers.mockImplementation(() => answersJoin)

        createUser.mockImplementation(() => Promise.resolve("userIdHash"))
        createMember.mockImplementation(() => Promise.resolve())


        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())
        const communityId = "communityId"
        const formResponseId = "formResponseId"

        // Act
        const result = await communityComponent.joinCommunity(communityId, formResponseId)

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
            "You've successfully joined",
            MailChimp.from,
            MailChimp.Templates.communityJoined.name,
            [
                {
                    name: MailChimp.Templates.communityJoined.fields.communityTitle,
                    content: "title"
                }
            ]
        )
    })

    test("joinCommunity, should throw if no community", async () => {
        // Arrange
        const { mock: spicedDatabaseMock, getCommunityById, createUser, createMember } = givenSpicedDatabase()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: formsApiMock, getAnswers } = givenFormsApi()
        const { mock: urlBuilder } = givenUrlBuilder()
        const { mock: matcher } = givenMatcher()

        getCommunityById.mockImplementation(() => null)

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())
        const communityId = "communityId"
        const formResponseId = "formResponseId"

        // Act
        // Assert
        await expect(async () => {
            await communityComponent.joinCommunity(communityId, formResponseId)
        }).rejects.toThrowError("Invalid argument")

        expect(sendTemplate).toHaveBeenCalledTimes(0)
        expect(getAnswers).toHaveBeenCalledTimes(0)
        expect(createUser).toHaveBeenCalledTimes(0)
        expect(createMember).toHaveBeenCalledTimes(0)
    })

    test("monday", async () => {
        // Arrange
        const { mock: spicedDatabaseMock, getCommunitiesIds, getMembers, getMatches, getUserByEmail } = givenSpicedDatabase()
        const { mock: mailComponentMock, sendTemplate } = givenMailComponent()
        const { mock: formsApiMock, getAnswers } = givenFormsApi()
        const { mock: urlBuilder } = givenUrlBuilder()
        const { mock: matcher, getTimeSpanId, calculateMatch, saveMatches } = givenMatcher()
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
                        "userId4": { matchedUserId: "userId3" }
                    }
                }
            }
        }

        getTimeSpanId.mockImplementation(() => ("timeSpanId"))
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
                        "userId4": true
                    }
                }
            }
        })
        getUserByEmail.mockImplementation((userId: string) => {
            return Promise.resolve({
                emailAddress: `${userId}@b.c`,
                firstName: `${userId}f`,
                lastName: `${userId}l`
            })
        })
        calculateMatch.mockImplementation(matchesGenerator)
        getMatches.mockImplementation(matchesGenerator)

        const communityComponent = new CommunityComponent(formsApiMock(), mailComponentMock(), spicedDatabaseMock(), urlBuilder(), matcher())
        const now = new Date(2020, 10, 25, 16, 59, 10)

        // Act Assert
        await expect(communityComponent.monday(now)).resolves.toEqual(undefined)

        // Assert
        expect(getTimeSpanId).toBeCalledWith(now.getTime())
        expect(getMembers.mock.calls).toEqual([
            ["communityId1"],
            ["communityId2"]
        ])
        expect(calculateMatch.mock.calls).toEqual([
            ["communityId1", "timeSpanId", ["userId1", "userId2"]],
            ["communityId2", "timeSpanId", ["userId3", "userId4"]]
        ])
        expect(saveMatches.mock.calls).toEqual([
            [matchesGenerator("communityId1"), "communityId1", "timeSpanId"],
            [matchesGenerator("communityId2"), "communityId2", "timeSpanId"]
        ])

        const mailTemplate = MailChimp.Templates.matched
        const subject = "Wow! You've matched!"

        expect(sendTemplate.mock.calls).toEqual([
                ["userId1@b.c", subject, MailChimp.from, mailTemplate.name, [
                    {
                        "content": "userId2f userId2l",
                        "name": mailTemplate.fields.matchedUserName
                    }, {
                        "content": "userId2@b.c",
                        "name": mailTemplate.fields.matchedUserEmail
                    }
                ]],
                ["userId2@b.c", subject, MailChimp.from, mailTemplate.name, [
                    {
                        "content": "userId1f userId1l",
                        "name": mailTemplate.fields.matchedUserName
                    }, {
                        "content": "userId1@b.c",
                        "name": mailTemplate.fields.matchedUserEmail
                    }
                ]],
                ["userId3@b.c", subject, MailChimp.from, mailTemplate.name, [
                    {
                        "content": "userId4f userId4l",
                        "name": mailTemplate.fields.matchedUserName
                    }, {
                        "content": "userId4@b.c",
                        "name": mailTemplate.fields.matchedUserEmail
                    }
                ]],
                ["userId4@b.c", subject, MailChimp.from, mailTemplate.name, [
                    {
                        "content": "userId3f userId3l",
                        "name": mailTemplate.fields.matchedUserName
                    },
                    {
                        "content": "userId3@b.c",
                        "name": mailTemplate.fields.matchedUserEmail
                    }
                ]]
            ]
        )
    })
})