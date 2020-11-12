
import React from "react"
import { TypeForm } from "./TypeForm"
import { Forms } from "./constants"

export const CreateCommunityPage: React.FC<unknown> = () => {
    return (
        <>
            <TypeForm
                typeformId={Forms.createCommunityFormId}
                elementId="create_community_form"
                style={{
                    height: "500px"
                }} />
        </>
    )
}