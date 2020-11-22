import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { CommunityComponent } from "../../logic/CommunityComponent"
import { EntityAlreadyExists, SpicedDatabase } from "../../database/spicedDatabase"
import { Logger } from "../../logger"
import { TokenEncryptor } from "../../TokenEncryptor"
import { FormsApi } from "../../forms/formsApi"
import { MailComponent } from "../../mail"
import { UrlBuilder } from "../../urlBuilder"

export type Props = {
    communityTitle?: string,
    communityId?: string
    error?: string
}

const log = new Logger("CommunityInvitationPage")

export const getServerSidePropsImpl = async (
    context: GetServerSidePropsContext,
    communityComponent: CommunityComponent,
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
        new CommunityComponent(new FormsApi(), new MailComponent(), new SpicedDatabase(), new UrlBuilder(new TokenEncryptor())),
        new UrlBuilder(new TokenEncryptor())
    )
}


