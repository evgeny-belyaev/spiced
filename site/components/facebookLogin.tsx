import { useEffect } from "react"
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'

type Props = {
    onLoggedIn: (s: fb.LoginStatus) => void
}

export const FakeLogin = ({ onLoggedIn }: Props) => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    
    function handleClick() {
        setLoggedIn(!isLoggedIn)
        onLoggedIn(isLoggedIn ? "connected" : "not_authorized")    
    }

    

    return (<Button variant="primary" type="submit" onClick={handleClick}>
        {isLoggedIn ? "Fake Logout" : "Fake Login"}
    </Button>)
}



export const FacebookLogin = ({ onLoggedIn }: Props) => {
    useEffect(() => {
        FB.init({
            appId: "383163236378113",
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v8.0'
        })

        window.FB.getLoginStatus(function (response) {
            onLoggedIn(response.status)
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