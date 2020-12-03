import React from "react"
import { Alert, FormControl, InputGroup } from "react-bootstrap"

import serverEntryPoint, { Props } from "../../components/pages/createCommunity"
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
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Community invitation link:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl readOnly={true} value={props.communityInvitationLink}/>
                </InputGroup>
            </SpicedPage>
        )
    }
}

export const getServerSideProps = serverEntryPoint

