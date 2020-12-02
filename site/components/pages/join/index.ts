import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { TokenEncryptor } from "../../TokenEncryptor"
import { Logger } from "../../logger"
import { UrlBuilder } from "../../urlBuilder"
import { ICommunityComponent } from "../../logic/ICommunityComponent"
import { createCommunityComponent } from "../../logic/CreateCommunityComponent"
import { EntityAlreadyExists } from "../../database/entityAlreadyExists"

export type Props = {
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
        const community = await communityComponent.joinCommunity(token.communityId, token.formResponseId, now)

        if (community == null) {
            return {
                props: {
                    error: "Cant' join community"
                }
            }
        } else {
            return {
                props: {
                    communityTitle: community.title
                }
            }
        }

    } catch (x) {
        if (x instanceof EntityAlreadyExists) {
            return {
                props: {
                    error: "You have already joined"
                }
            }
        } else {
            log.error(x)

            return {
                props: {
                    error: "Cant' find community"
                }
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
