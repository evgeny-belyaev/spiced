import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import Head from "next/head"

import "bootstrap/dist/css/bootstrap.min.css"

type Props = {
    children: React.ReactNode
}

const ga = {
    __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-735VEPNL7N');
`
}

export const SpicedPage: React.FC<Props> = ({ children }: Props) => (
    <>
        <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-735VEPNL7N"></script>
            <script dangerouslySetInnerHTML={ga}>
            </script>
        </Head>
        {children}
    </>
)
