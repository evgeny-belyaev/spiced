import React, { useEffect } from "react"
import Head from "next/head"
import { HiddenFieldDescription } from "./TypeForm"

type Props = {
    elementId: string,
    typeformId: string
    hiddenFields?: HiddenFieldDescription[]
}

type TypeformEmbed = {
    makePopup: (url: string, settings: unknown) => { open: () => unknown }
}

declare global {
    interface Window {
        typeformEmbed: TypeformEmbed;
    }
}


export const TypeFormEmbed: React.FC<Props> = (props: Props) => {
    const hiddenFieldsQuery = props.hiddenFields && props.hiddenFields.length ?
        "?" + props.hiddenFields.map((h) => `${h.name}=${h.value}`).join("&") :
        ""

    const url = `https://admin.typeform.com/to/${props.typeformId}${hiddenFieldsQuery}`

    useEffect(() => {
        const popup = window.typeformEmbed.makePopup(url, {
            hideHeaders: true,
            hideFooter: true
        })

        document.getElementById(props.elementId)?.addEventListener("click", function () {
            popup.open()
        })
    })

    return (<>
        <Head>
            <script src="https://embed.typeform.com/embed.js" type="text/javascript"/>
        </Head>
    </>)
}
