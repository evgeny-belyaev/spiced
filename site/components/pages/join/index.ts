import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { TokenEncryptor } from "../../TokenEncryptor"
import { Logger } from "../../logger"
import { UrlBuilder } from "../../urlBuilder"
import { ICommunityComponent } from "../../logic/ICommunityComponent"
import { createCommunityComponent } from "../../logic/CreateCommunityComponent"
import { PageProps } from "../utils"

export interface Props extends PageProps {
    alreadyJoined?: boolean,
    communityTitle?: string,
    error?: string
}

const log = new Logger("JoinCommunityPage")

export async function getServerSidePropsImpl(
    context: GetServerSidePropsContext,
    communityComponent: ICommunityComponent,
    urlBuilder: UrlBuilder
): Promise<GetServerSidePropsResult<Props>> {
    try {
        const now = new Date().getTime()
        const token = urlBuilder.getJoinConfirmationToken(context)
        const result = await communityComponent.joinCommunity(token.communityId, token.formResponseId, now)

        return {
            props: {
                communityTitle: result.communityTitle,
                alreadyJoined: result.alreadyJoined
            }
        }

    } catch (x) {
        log.error(x)

        return {
            props: {
                error: "Cant' find community"
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
