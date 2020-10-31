import { useEffect } from "react"

type Props = {
    onLoggedIn: (s: fb.LoginStatus) => void
}

export const FacebookLogin = ({ onLoggedIn }: Props) => {
    useEffect(() => {
        window.FB.getLoginStatus(function (response) {
            if (response.status === "connected") {
                onLoggedIn(response.status)
            }
        })
    })

    return (<>
        <div className="fb-login-button" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="true" data-use-continue-as="true" data-width=""></div>
    </>)
}