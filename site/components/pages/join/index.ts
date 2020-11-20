import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { CommunityComponent } from "../../logic/CommunityComponent"
import { TokenEncryptor } from "../../TokenEncryptor"
import { FormsApi } from "../../forms/formsApi"
import { MailComponent } from "../../mail"
import { SpicedDatabase } from "../../database/spicedDatabase"
import { Logger } from "../../logger"

export type Props = {
    communityTitle?: string,
    error?: string
}

const log = new Logger("JoinCommunityPage")


export async function getServerSidePropsImpl (context: GetServerSidePropsContext, communityComponent: CommunityComponent): Promise<GetServerSidePropsResult<Props>> {
    try {
        const encryptedToken = String(context.params ? context.params["joinToken"] : "")
        const community = await communityComponent.joinCommunityByEncryptedToken(encryptedToken)

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
        new CommunityComponent(
            new TokenEncryptor(),
            new FormsApi(),
            new MailComponent(),
            new SpicedDatabase()
        )
    )
}
