import serverEntryPoint, { Props } from "../../components/pages/optin"
import { Alert } from "react-bootstrap"
import React from "react"
import { SpicedPage } from "../../components/SpicedPage"

export default (props: Props) => {
    if (props.error) {
        return <SpicedPage>
            <Alert variant="warning">
                {props.error}
            </Alert>
        </SpicedPage>

    } else {
        const message = props.optIn ? "You have opted in for matching next week!" : "You have canceled matching next week!"

        return <SpicedPage>
            <Alert variant="success">
                {message}
            </Alert>
        </SpicedPage>
    }
}

export const getServerSideProps = serverEntryPoint