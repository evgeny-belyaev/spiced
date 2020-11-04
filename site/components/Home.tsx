import App from "../components/App"
import { FacebookLogin, FakeLogin } from "./FacebookLogin"
import React, { useEffect, useState } from "react"
import { Logger } from "../components/logger"
import { CreateCommunityForm } from "./CreateCommunityForm"

const log = new Logger("index")

export const Home: React.FC<unknown> = () => {
    const [isLoggedIn, setLoggedIn] = useState(false)

    const handleChange = (r: boolean) => {
        setLoggedIn(r)
    }

    return (
        <App>
            {/* <FakeLogin onLoggedIn={handleChange} /> */}
            <FacebookLogin onLoggedIn={handleChange} />

            {isLoggedIn && <CreateCommunityForm />}
        </App>
    )
}
