import serverEntryPoint, { Props } from "../../components/pages/optin"
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
        const message = props.optIn ? "You have opted in for matching next week!" : "You have canceled matching next week!"

        return (
            <Alert variant="success">
                {message}
            </Alert>
        )
    }
}

export const getServerSideProps = serverEntryPoint