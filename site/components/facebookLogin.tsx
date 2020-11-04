import { useEffect } from "react"
import Button from "react-bootstrap/Button"
import React, { useState } from "react"
import { Logger } from "./logger"
import { fbGetLoginStatus, fbLogin, fbLogout } from "./facebook"

const log = new Logger("Facebooklogin")

type Props = {
    onLoggedIn: (userId: string) => void
}

export const FakeLogin: React.FC<Props> = ({ onLoggedIn }: Props) => {
    const [isLoggedIn, setLoggedIn] = useState(false)

    // log.debug(isLoggedIn)
    onLoggedIn("111222333444")

    function handleClick() {
        setLoggedIn(!isLoggedIn)
    }

    return (<Button variant="primary" type="submit" onClick={handleClick}>
        {isLoggedIn ? "Fake Logout" : "Fake Login"}
    </Button>)
}

export const FacebookLogin: React.FC<Props> = ({ onLoggedIn }: Props) => {
    const [isFacebookSdkReady, setFacebookSdkReady] = useState(false)
    const [userId, setUserId] = useState("")

    useEffect(() => {
        async function init() {
            if (!isFacebookSdkReady) {
                log.info("Fb.init")

                FB.init({
                    appId: "383163236378113",
                    autoLogAppEvents: true,
                    xfbml: true,
                    version: "v8.0"
                })

                setFacebookSdkReady(true)
            } else {
                const response = await fbGetLoginStatus()
                log.info("response", response)
                setUserId(response.status === "connected" ? response.authResponse.userID : "")
            }
        }

        void init()
    })

    async function onClick() {
        const response = await fbGetLoginStatus()

        if (response && response.status === "connected") {
            await fbLogout()
            setUserId("")
        } else {
            setUserId(
                (await fbLogin()).authResponse.userID
            )
        }
    }

    onLoggedIn(userId)

    const buttonTitle = userId != "" ? "Logout" : "Login with Facebook"

    return (<>
        <Button onClick={onClick}>{buttonTitle}</Button>
    </>)
}