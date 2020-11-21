import serverEntryPoint, { Props } from "../../components/pages/join"
import { Alert } from "react-bootstrap"
import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"

export default (props: Props) => {
    if (props.error) {
        return (
            <Alert variant="warning">
                {props.error}
            </Alert>
        )
    } else {
        return (
            <Alert variant="success">
                You have joined to {props.communityTitle}!
            </Alert>
        )
    }
}

export const getServerSideProps = serverEntryPoint