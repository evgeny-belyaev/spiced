import React from "react"
import { Logger } from "../../components/logger"
import { Alert, FormControl, InputGroup } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import serverEntryPoint, { Props } from "../../components/pages/createCommunity"



export default (props: Props) => {
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

export const getServerSideProps = serverEntryPoint

