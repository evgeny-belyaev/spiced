import React, { CSSProperties, useEffect } from "react"
import Head from "next/head"
import { makeWidget } from "@typeform/embed"

type Props = {
    typeformId: string
    elementId: string
    style?: CSSProperties,
    hiddenFields?: HiddenFieldDescription[]
}

export type HiddenFieldDescription = {
    name: string
    value: string
}

export const TypeForm: React.FC<Props> = (props: Props) => {
    const hiddenFieldsQuery = props.hiddenFields && props.hiddenFields.length ?
        "?" + props.hiddenFields.map((h) => `${h.name}=${h.value}`).join("&") :
        ""

    useEffect(() => {
        const el = document.getElementById(props.elementId)

        el && makeWidget(el, `https://admin.typeform.com/to/${props.typeformId}${hiddenFieldsQuery}`, {
            hideFooter: true,
            hideHeaders: true,
            opacity: 100
        })
    })
    return (<>
        <Head>
            <script src="https://embed.typeform.com/embed.js" type="text/javascript"/>
        </Head>
        <div
            style={props.style}
            id={props.elementId}></div>
    </>)
}