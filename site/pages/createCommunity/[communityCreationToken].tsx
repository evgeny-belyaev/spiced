import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import React from "react"
import { CommunityComponent } from "../../components/logic/CommunityComponent"
import { TokenEncryptor } from "../../components/TokenEncryptor"
import { FormsApi } from "../../components/forms/formsApi"
import { MailComponent } from "../../components/mail"
import { EntityAlreadyExists, SpicedDatabase } from "../../components/database/spicedDatabase"
import { Logger } from "../../components/logger"
import { Alert, FormControl, InputGroup } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"

type Props = {
    communityInvitationLink?: string,
    error?: string
}

const log = new Logger("CreateCommunityConfirmationPage")

const CreateCommunityConfirmationPage: React.FC<Props> = (props: Props) => {
    if (props.error) {
        return (
            <Alert variant="warning">
                {props.error}
            </Alert>
        )
    } else {
        return (
            <>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Community invitation link:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl readOnly={true} value={props.communityInvitationLink}/>
                </InputGroup>
            </>
        )
    }
}


export const getServerSidePropsImpl = async (
    context: GetServerSidePropsContext,
    communityComponent: CommunityComponent
): Promise<GetServerSidePropsResult<Props>> => {
    try {
        const encryptedToken = String(context.params ? context.params["communityCreationToken"] : "")

        log.debug("getServerSiteProps", encryptedToken)

        const result = await communityComponent.createCommunity(encryptedToken)

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

// This gets called on every request
export const getServerSideProps = async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Props>> =>
    getServerSidePropsImpl(
        context,
        new CommunityComponent(
            new TokenEncryptor(),
            new FormsApi(),
            new MailComponent(),
            new SpicedDatabase()
        )
    )

export default CreateCommunityConfirmationPage
