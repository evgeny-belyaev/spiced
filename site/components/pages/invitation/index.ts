import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { Logger } from "../../logger"
import { TokenEncryptor } from "../../TokenEncryptor"
import { UrlBuilder } from "../../urlBuilder"
import { EntityAlreadyExists } from "../../database/entityAlreadyExists"
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
        const token = urlBuilder.getInvitationToken(context)
        const community = await communityComponent.findCommunityById(token.communityKey)

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
                    communityId: token.communityKey // TODO: Encrypt?
                }
            }
        }

    } catch (x) {
        log.error(x)

        if (x instanceof EntityAlreadyExists) {
            return {
                props: {
                    error: "Community already exists"
                }
            }
        }

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


