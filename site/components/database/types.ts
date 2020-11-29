export type User = {
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: string,
    website: string
}

export type Community = {
    title: string
    publicLink: string,
    typeFormResponseId: string,
    creatorUserId: string
}

export type CommunitiesIds = NodeJS.Dict<boolean>
export type UsersIds = NodeJS.Dict<boolean>

export type MatchedCommunities = NodeJS.Dict<MatchedCommunity> // Key is communityId

export type MatchedCommunity = boolean

export type Matches = NodeJS.Dict<Match> // Key is userId

export type Match = {
    matchedUserId: string
}

export type PreviousMatches = NodeJS.Dict<PreviousMatch> // Key is matched userId

export type PreviousMatch = {
    timeSpanId: number,
    feedback?: string
}

export type Members = NodeJS.Dict<boolean>



export const dbExample = {
    v1: {
        users: {
            byEmail: {
                "user1EmailSha256": {},
                "user2EmailSha256": {}
            }
        },

        matched: {
            byCommunityId: {
                "communityId1": {
                    byUserId: {
                        "userId1" : {
                            userId2 : { result: "" },
                            userId3 : { result: "" }
                        }
                    }
                },
                "communityId2": {
                    byUserId: {
                        "userId1" : {
                            userId2 : { result: "" },
                            userId3 : { result: "" }
                        }
                    }
                }
            }
        },

        match: {
            byTimeSpanStartTs: {
                "10000000": {
                    listOfCommunityIds: {
                        "communityId2": true,
                        "communityId1": true
                    },
                    byCommunityId: {
                        "communityId1": {
                            "userId1": {
                                second: "userId2"
                            },
                            "userId2": {
                                second: "userId3"
                            },

                        }

                    }
                },
                "20000000": {
                    listOfCommunityIds: {
                        "communityId2": true,
                        "communityId1": true
                    },
                    byCommunityId: {
                        "communityId1": {
                            "matchId1": {
                                first: "userId1",
                                second: "userId2"
                            },
                            "matchId2": {
                                first: "looserId3",
                                second: null
                            }
                        }

                    }
                }
            }
        },

        optIns: {
            byTimeSpanId: {
                "4543523523": {
                    toTs: "67867867867",
                    communitiesIds: { // communities with opted-in users
                        "communityId1": true,
                        "communityId2": true
                    },
                    byCommunityId: {
                        "communityId1": {
                            byUserId: {
                                "userId1": true,
                                "userId2": true
                            }
                        },
                        "communityId2": {
                            byUserId: {
                                "userId1": true,
                                "userId2": true
                            }
                        }
                    }
                }
            }
        },

        members: {
            byCommunityId: {
                "communityId": {
                    byUserId: {
                        "user1EmailSha256": true,
                        "user2EmailSha256": true
                    }
                }
            }
        },

        communities: {
            byId: {
                "communityId": {
                    title: "title",
                    creatorUserId: "userId"
                }
            },
            listOfIds: {
                "communityId2": true,
                "communityId1": true
            },
            byTypeFormResponseId: {}
        }
    }
}

