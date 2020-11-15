import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"

type Props = {
  children: React.ReactNode
}

const App: React.FC<Props> = ({ children }: Props) => (
  <>
    
    <div id="fb-root" />
    <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js" nonce="GZo6bQSn" />
    {children}
  </>
)

export default App