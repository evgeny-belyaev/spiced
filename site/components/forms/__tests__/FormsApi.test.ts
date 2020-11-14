import { Forms } from "../../constants"
import { FormsApi } from "../index"
import { Fetcher } from "../../../api/fetcher"

export default describe("FormsApi", () => {
    test("Forms.getResponsesUrl: should return url", () => {
        // Arrange

        // Act
        const result = Forms.getResponsesUrl("formId", ["id1", "id2"])

        // Assert
        expect(result).toBe("https://api.typeform.com/forms/formId/responses?included_responses_ids=id1,id2")
    })

    test("Forms.getResponsesUrl: should throw with empty ids", () => {
        // Assert
        expect(() => {
            Forms.getResponsesUrl("formId", [])
        }).toThrowError("Invalid argument: includedResponsesIds")
    })


    test("should call TypeForm api to getResponses", async () => {
        // Arrange
        const get = jest.fn()
        const post = jest.fn()

        const fetcherMock = jest.fn<Fetcher>(() => ({
            get, post
        }))

        const formsApi = new FormsApi(fetcherMock())

        // Act
        const r = await formsApi.getAnswers(Forms.createCommunityFormId, "123")

        // Assert
        expect(get).toBeCalledWith(`https://api.typeform.com/forms/${Forms.createCommunityFormId}/responses?included_responses_ids=123`)
    })
})
