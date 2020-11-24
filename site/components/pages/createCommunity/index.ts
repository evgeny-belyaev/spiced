// This gets called on every request
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { CommunityComponent } from "../../logic/CommunityComponent"
import { TokenEncryptor } from "../../TokenEncryptor"
import { FormsApi } from "../../forms/formsApi"
import { MailComponent } from "../../mail"
import { SpicedDatabase } from "../../database/spicedDatabase"
import { UrlBuilder } from "../../urlBuilder"
import { Logger } from "../../logger"
import { EntityAlreadyExists } from "../../database/entityAlreadyExists"

export type Props = {
    communityInvitationLink?: string,
    error?: string
}

const log = new Logger("CreateCommunityConfirmationPage")

export const getServerSidePropsImpl = async (
    context: GetServerSidePropsContext,
    communityComponent: CommunityComponent,
    urlBuilder: UrlBuilder
): Promise<GetServerSidePropsResult<Props>> => {
    try {
        const token = urlBuilder.getCreateCommunityConfirmationToken(context)
        const result = await communityComponent.createCommunity(token.formsResponseId)

        return {
            props: {
                communityInvitationLink: result.communityInvitationLink
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
                error: "Unknown error"
            }
        }
    }
}

export default async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Props>> =>
    getServerSidePropsImpl(
        context,
        new CommunityComponent(new FormsApi(), new MailComponent(), new SpicedDatabase(), new UrlBuilder(new TokenEncryptor())),
        new UrlBuilder(new TokenEncryptor())
    )
