import { useEffect } from "react"
import Button from "react-bootstrap/Button"
import React, { useState } from "react"
import { Logger } from "./logger"

const log = new Logger("fakelogin")

type Props = {
    onLoggedIn: (isLoggedId: boolean) => void
}

export const FakeLogin: React.FC<Props> = ({ onLoggedIn }: Props) => {
    const [isLoggedIn, setLoggedIn] = useState(false)

    // log.debug(isLoggedIn)
    onLoggedIn(isLoggedIn)

    function handleClick() {
        setLoggedIn(!isLoggedIn)
    }

    return (<Button variant="primary" type="submit" onClick={handleClick}>
        {isLoggedIn ? "Fake Logout" : "Fake Login"}
    </Button>)
}

export const FacebookLogin: React.FC<Props> = ({ onLoggedIn }: Props) => {
    const [isFacebookSdkReady, setFacebookSdkReady] = useState(false)
    const [isLoggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
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
            FB.getLoginStatus(function (response) {
                log.info("response.status!!!:" + response.status)
                setLoggedIn(response.status === "connected")
            })
        }
    })
    
    onLoggedIn(isLoggedIn)

    function onClick() {
        FB.getLoginStatus(function (response) {
            if (response && response.status === "connected") {
                FB.logout(function (response) {
                    setLoggedIn(false)
                })
            } else {
                FB.login(function (response) {
                    setLoggedIn(true)
                })
            }
        })
    }

    const buttonTitle = isLoggedIn ? "Logout" : "Login with Facebook"

    return (<>
        <Button onClick={onClick}>{buttonTitle}</Button>
    </>)
}