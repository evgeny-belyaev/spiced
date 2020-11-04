import React from "react"
import Head from "next/head"

import "bootstrap/dist/css/bootstrap.min.css"

const App = ({ children }) => (
  <>
    <Head>
    </Head>
    <div id="fb-root"/>
    <script crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js" nonce="GZo6bQSn"/>
    {children}
  </>
)

export default App
