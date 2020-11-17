import { getServerSidePropsImpl } from "../pages/createCommunity/[encryptedToken]"
import { CommunityComponent } from "../components/logic/CommunityComponent"
import { IncomingMessage, ServerResponse } from "http"
import { ParsedUrlQuery } from "querystring"

const givenCommunityComponent = () => {
    const createCommunity = jest.fn()

    return {
        mock: jest.fn<CommunityComponent>(() => ({
            createCommunity
        })),
        createCommunity
    }
}

const givenContext = (params: ParsedUrlQuery) => ({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    req: jest.fn<IncomingMessage>()(),

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    res: jest.fn<ServerResponse>()(),

    query: {},
    resolvedUrl: "",
    params
})

export default describe("Pages: createCommunity", () => {
    test("getServerSideProps", async () => {
        // Arrange
        const { mock, createCommunity } = givenCommunityComponent()

        // Act
        const context = givenContext({
            encryptedToken: "asd"
        })

        await getServerSidePropsImpl(
            context,
            mock()
        )

        // Assert
        expect(createCommunity).toBeCalledWith("asd")
    })
})