import serverEntryPoint, { Props } from "../../components/pages/join"
import { Alert } from "react-bootstrap"
import React from "react"
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
        return (
            <SpicedPage>
                <Alert variant="success">
                    You have joined to {props.communityTitle}!
                </Alert>
            </SpicedPage>
        )
    }
}

export const getServerSideProps = serverEntryPoint