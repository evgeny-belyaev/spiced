import App from "../components/App"
import { FacebookLogin } from "./FacebookLogin"
import React, { useState } from "react"
import { Logger } from "../components/logger"
import { CreateCommunityForm } from "./CreateCommunityForm"

const log = new Logger("index")

export const Home: React.FC<unknown> = () => {
    const [userId, setUserId] = useState("")

    const handleLoggedIn = (userId: string) => {
        setUserId(userId)
    }

    return (
        <App>
            {/* <FakeLogin onLoggedIn={handleChange} /> */}
            <FacebookLogin onLoggedIn={handleLoggedIn} />

            {userId && <CreateCommunityForm userId={userId} />}
        </App>
    )
}
