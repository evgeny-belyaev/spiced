export type Community = {
    title: string
    publicLink: string,
    creator: {
        firstName: string,
        lastName: string,
        emailAddress: string,
        phoneNumber: string,
        website: string
    }
}

export type Db = {
    communities: Community[]
}

