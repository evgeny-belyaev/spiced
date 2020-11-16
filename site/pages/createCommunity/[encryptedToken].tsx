import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import React from "react"
import { CommunityComponent } from "../../components/logic/CommunityComponent"
import { TokenEncryptor } from "../../components/TokenEncryptor"
import { FormsApi } from "../../components/forms/formsApi"
import { MailComponent } from "../../components/mail"
import { SpicedDatabase } from "../../components/database/spicedDatabase"
import { Logger } from "../../components/logger"


type Props = {
    communityInvitationLink?: string,
    error?: string
}

const log = new Logger("CreateCommunityConfirmationPage")

const CreateCommunityConfirmationPage: React.FC<Props> = (props: Props) => {

    return (
        <>
            <div>{props.communityInvitationLink}</div>
        </>
    )
}


// This gets called on every request
export const getServerSideProps = async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Props>> => {
    try {
        const encryptedToken = String(context.params ? context.params["encryptedToken"] : "")

        log.debug("getServerSiteProps", encryptedToken)

        const result = await new CommunityComponent(
            new TokenEncryptor(),
            new FormsApi(),
            new MailComponent(),
            new SpicedDatabase()
        ).createCommunity(encryptedToken)

        return {
            props: {
                communityInvitationLink: result.communityInvitationLink
            }
        }
    } catch (x) {
        log.error(x)

        return {
            props: {
                error: "Error!"
            }
        }
    }
}

export default CreateCommunityConfirmationPage
