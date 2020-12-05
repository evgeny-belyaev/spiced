import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { TokenEncryptor } from "../../TokenEncryptor"
import { Logger } from "../../logger"
import { UrlBuilder } from "../../urlBuilder"
import { ICommunityComponent } from "../../logic/ICommunityComponent"
import { createCommunityComponent } from "../../logic/CreateCommunityComponent"
import { PageProps } from "../utils"

export interface Props extends PageProps {
    optIn?: boolean,
    error?: string
}

const log = new Logger("OptInPage")

export async function getServerSidePropsImpl(
    context: GetServerSidePropsContext,
    communityComponent: ICommunityComponent,
    urlBuilder: UrlBuilder
): Promise<GetServerSidePropsResult<Props>> {
    try {
        const token = urlBuilder.getOptInToken(context)
        await communityComponent.optIn(token.timeSpanId, token.communityId, token.userId, token.optIn)

        return {
            props: {
                optIn: token.optIn
            }
        }
    } catch (x) {
        log.error(x)

        return {
            props: {
                error: "Can't opt in"
            }
        }
    }
}


export default async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Props>> => {
    const communityComponent = createCommunityComponent()

    return getServerSidePropsImpl(
        context,
        communityComponent,
        new UrlBuilder(new TokenEncryptor())
    )
}
