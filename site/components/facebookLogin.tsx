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
    onLoggedIn(isLoggedIn);

    function handleClick() {
        setLoggedIn(!isLoggedIn)
    }

    return (<Button variant="primary" type="submit" onClick={handleClick}>
        {isLoggedIn ? "Fake Logout" : "Fake Login"}
    </Button>)
}

export const FacebookLogin: React.FC<Props> = ({ onLoggedIn }: Props) => {
    useEffect(() => {
        FB.init({
            appId: "383163236378113",
            autoLogAppEvents: true,
            xfbml: true,
            version: "v8.0"
        })

        window.FB.getLoginStatus(function (response) {
            // onLoggedIn(response.status)
        })
    })

    return (<>
        <div
            className="fb-login-button"
            data-size="large"
            data-button-type="continue_with"
            data-layout="default"
            data-auto-logout-link="true"
            data-use-continue-as="true"
            data-width="" />
    </>)
}