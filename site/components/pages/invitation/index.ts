import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { Logger } from "../../logger"
import { TokenEncryptor } from "../../TokenEncryptor"
import { UrlBuilder } from "../../urlBuilder"
import { ICommunityComponent } from "../../logic/ICommunityComponent"
import { createCommunityComponent } from "../../logic/CreateCommunityComponent"

export type Props = {
    communityTitle?: string,
    communityId?: string
    error?: string
}

const log = new Logger("CommunityInvitationPage")

export const getServerSidePropsImpl = async (
    context: GetServerSidePropsContext,
    communityComponent: ICommunityComponent,
    urlBuilder: UrlBuilder
): Promise<GetServerSidePropsResult<Props>> => {
    try {
        const communityId = urlBuilder.getInvitationToken(context)
        const community = await communityComponent.findCommunityById(communityId)

        if (community == null) {
            return {
                props: {
                    error: "Cant' find community"
                }
            }
        } else {
            return {
                props: {
                    communityTitle: community.title,
                    communityId: communityId // TODO: Encrypt?
                }
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
    return getServerSidePropsImpl(
        context,
        createCommunityComponent(),
        new UrlBuilder(new TokenEncryptor())
    )
}


