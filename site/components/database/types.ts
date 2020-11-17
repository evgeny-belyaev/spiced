export type Community = {
    title: string
    publicLink: string,
    typeFormResponseId: string,
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

