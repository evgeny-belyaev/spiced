import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import React from "react"
import { CommunityComponent } from "../../components/logic/CommunityComponent"
import { TokenEncryptor } from "../../components/TokenEncryptor"
import { FormsApi } from "../../components/forms"
import { MailComponent } from "../../components/mail"
import { Fetcher } from "../../api/fetcher"

type Props = {
    communityInvitationLink?: string,
    error?: string
}


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

        const result = await new CommunityComponent(
            new TokenEncryptor(),
            new FormsApi(new Fetcher()),
            new MailComponent()
        ).createCommunity(encryptedToken)

        return {
            props: {
                communityInvitationLink: result.communityInvitationLink
            }
        }
    } catch (x) {
        return {
            props: {
                error: "Error!"
            }
        }
    }
}

export default CreateCommunityConfirmationPage
