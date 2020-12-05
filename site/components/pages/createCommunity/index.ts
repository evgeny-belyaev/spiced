// This gets called on every request
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { TokenEncryptor } from "../../TokenEncryptor"
import { UrlBuilder } from "../../urlBuilder"
import { Logger } from "../../logger"
import { ICommunityComponent } from "../../logic/ICommunityComponent"
import { createCommunityComponent } from "../../logic/CreateCommunityComponent"
import { PageProps } from "../utils"

export interface Props extends PageProps {
    communityTitle?: string,
    communityInvitationLink?: string,
    alreadyExist?: boolean,
    error?: string
}

const log = new Logger("CreateCommunityConfirmationPage")

export const getServerSidePropsImpl = async (
    context: GetServerSidePropsContext,
    communityComponent: ICommunityComponent,
    urlBuilder: UrlBuilder
): Promise<GetServerSidePropsResult<Props>> => {
    try {
        const token = urlBuilder.getCreateCommunityConfirmationToken(context)
        const result = await communityComponent.createCommunity(token.formsResponseId)

        return {
            props: {
                communityInvitationLink: result.communityInvitationLink,
                communityTitle: result.communityTitle,
                alreadyExist: result.alreadyExist
            }
        }

    } catch (x) {
        log.error(x)

        return {
            props: {
                error: "Unknown error"
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
