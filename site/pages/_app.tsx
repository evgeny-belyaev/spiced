import React  from "react"
import "../public/clear.css"

type Props = {
    Component: React.JSXElementConstructor<unknown>
    pageProps: unknown
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: Props) {
    // @ts-ignore
    return <Component {...pageProps} />
}