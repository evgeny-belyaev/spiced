import React from "react"
import Head from "next/head"

import "bootstrap/dist/css/bootstrap.min.css"

type Props = {
    title: string,
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


export const SpicedPage: React.FC<Props> = ({ children, title }: Props) => (
    <>
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="viewport" content="width=400"/>
            <title>{title}</title>
            <meta property="og:url" content="page15719596.html"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content=""/>

            <link rel="shortcut icon" href="favicon.ico"/>

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-735VEPNL7N"></script>
            <script dangerouslySetInnerHTML={ga}>
            </script>
        </Head>
        {children}
    </>
)
