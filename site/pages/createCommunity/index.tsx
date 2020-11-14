import React from "react"
import { TypeForm } from "../../components/forms/TypeForm"
import { Forms } from "../../components/constants"

const Index: React.FC<unknown> = () => {

    return <TypeForm
        typeformId={Forms.createCommunityFormId}
        elementId="create_community_form"
        style={{
            height: "500px"
        }}/>

}

export default Index