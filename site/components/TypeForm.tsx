import React, { CSSProperties, useEffect } from "react"
import Head from "next/head"
import { makeWidget } from "@typeform/embed"

type Props = {
    typeformId: string
    elementId: string
    style?: CSSProperties
}

export const TypeForm: React.FC<Props> = (props: Props) => {
    useEffect(() => {
        const el = document.getElementById(props.elementId)

        el && makeWidget(el, `https://admin.typeform.com/to/${props.typeformId}`, {
            hideFooter: true,
            hideHeaders: true,
            opacity: 100
        })
    })
    return (<>
        <Head>
            <script src="https://embed.typeform.com/embed.js" type="text/javascript" />
        </Head>
        <div
            style={props.style}
            id={props.elementId}></div>
    </>)
}