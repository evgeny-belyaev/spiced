import React from "react"
import { TypeForm } from "../../components/forms/TypeForm"
import { Forms } from "../../components/constants"
import serverEntryPoint, { Props } from "../../components/pages/invitation"
import { Alert } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"

export default (props: Props) => {
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

    if (props.error) {
        return (
            <Alert variant="warning">
                {props.error}
            </Alert>
        )
    } else {
        return <TypeForm
            typeformId={Forms.joinCommunity.formId}
            elementId="join_community_form"
            hiddenFields={hiddenFields}
            style={{
                height: "500px"
            }}/>
    }
}


// This gets called on every request
export const getServerSideProps = serverEntryPoint

