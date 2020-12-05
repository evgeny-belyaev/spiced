import React from "react"
import { TypeForm } from "../../components/forms/TypeForm"
import { Forms } from "../../components/constants"
import serverEntryPoint, { Props } from "../../components/pages/invitation"
import { Alert } from "react-bootstrap"
import { SpicedPage } from "../../components/SpicedPage"

export default (props: Props) => {
    if (props.error) {
        return (
            <SpicedPage>
                <Alert variant="warning">
                    {props.error}
                </Alert>
            </SpicedPage>
        )
    } else {
        const hiddenFields = [
            {
                name: Forms.joinCommunity.hiddenFields.communityTitle,
                value: props.communityTitle as string
            },
            {
                name: Forms.joinCommunity.hiddenFields.communityId,
                value: props.communityId as string
            }
        ]

        return <SpicedPage>
            <TypeForm
                typeformId={Forms.joinCommunity.formId}
                elementId="join_community_form"
                hiddenFields={hiddenFields}
                style={{
                    height: "500px"
                }}/>
        </SpicedPage>
    }
}


// This gets called on every request
export const getServerSideProps = serverEntryPoint

