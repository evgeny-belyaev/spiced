import React from "react"
import Head from "next/head"

import "bootstrap/dist/css/bootstrap.min.css";

const App = ({ children }) => (
  <main>
    <Head>
      <script src="https://connect.facebook.net/en_US/sdk.js" nonce="KMGyQ6eG" />
    </Head>

    {children}
  </main>
)

export default App
