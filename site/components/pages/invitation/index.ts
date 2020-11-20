import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { CommunityComponent } from "../../logic/CommunityComponent"
import { EntityAlreadyExists, SpicedDatabase } from "../../database/spicedDatabase"
import { Logger } from "../../logger"
import { TokenEncryptor } from "../../TokenEncryptor"
import { FormsApi } from "../../forms/formsApi"
import { MailComponent } from "../../mail"

export type Props = {
    communityTitle?: string,
    error?: string
}

const log = new Logger("CommunityInvitationPage")

export const getServerSidePropsImpl = async (
    context: GetServerSidePropsContext,
    communityComponent: CommunityComponent
): Promise<GetServerSidePropsResult<Props>> => {
    try {
        const encryptedToken = String(context.params ? context.params["invitationToken"] : "")
        const community = await communityComponent.findCommunityByEncryptedToken(encryptedToken)

        if (community == null) {
            return {
                props: {
                    error: "Cant' find community"
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
        new CommunityComponent(
            new TokenEncryptor(),
            new FormsApi(),
            new MailComponent(),
            new SpicedDatabase()
        )
    )
}


