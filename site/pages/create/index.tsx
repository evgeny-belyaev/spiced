import React from "react"
import { TypeForm } from "../../components/forms/TypeForm"
import { Forms } from "../../components/constants"
import { SpicedPage } from "../../components/SpicedPage"

const Index: React.FC<unknown> = () => {

    return <SpicedPage title="Create community">
        <TypeForm
            typeformId={Forms.createCommunity.formId}
            elementId="create_community_form"
            style={{
                height: "500px"
            }}/>
    </SpicedPage>
}

export default Index
export const getServerSideProps = () => {
    return {}
}