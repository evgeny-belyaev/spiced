export async function fbGetLoginStatus(): Promise<facebook.StatusResponse> {
    return new Promise<facebook.StatusResponse>(
        (resolve) => {
            FB.getLoginStatus(function (response) {
                resolve(response)
            })
        }
    )
}

export const fbLogin = async (): Promise<facebook.StatusResponse> => {
    return new Promise<facebook.StatusResponse>(
        (resolve) => {
            FB.login(function (response) {
                resolve(response)
            })
        }
    )
}

export const fbLogout = async (): Promise<facebook.StatusResponse> => {
    return new Promise<facebook.StatusResponse>(
        (resolve) => {
            FB.logout(function (response) {
                resolve(response)
            })
        }
    )
}