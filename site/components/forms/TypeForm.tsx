import React, { CSSProperties } from "react"
import Head from "next/head"


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

    const css = "html{margin margin: 0; height: 100%; overflow: hidden;}\n" +
        "iframe{position: absolute; left:0; right:0; bottom:0; top:0; border:0;}"

    return (<>
        <Head>
            <style type="text/css">{css}</style>
            <script src="https://embed.typeform.com/embed.js" type="text/javascript"/>
        </Head>
        <iframe
            id="typeform-full"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="camera; microphone; autoplay; encrypted-media;"
            src={`https://admin.typeform.com/to/${props.typeformId}${hiddenFieldsQuery}`}>
        </iframe>
    </>)
}
