export const communities = "communities"

export type Community = {
    title: string
    ownerId: string
}

export type Db = {
    communities: Community[]
}

