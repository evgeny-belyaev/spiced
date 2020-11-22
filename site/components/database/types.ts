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

export type Members = NodeJS.Dict<boolean>
/*
const dbExample = {
    users: {
        byEmail: {
            "userEmailSha256": {}
        }
    },
    optIns: {
        byStartTs: {
            "4543523523": {
                toTs: "67867867867",
                communities: { // communities with opted-in users
                    "communityId1": true,
                    "communityId2": true
                },
                byCommunityId: {
                    "communityId1" : {
                        "userId1" : true,
                        "userId2" : true,
                    },

                    "communityId2" : {
                        "userId1" : false,
                        "userId2" : true,
                    }
                }
            }
        }
    },
    members: {
        byCommunityId: {
            "communityId": {
                byId: {
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
        byTypeFormResponseId: {}
    }
}
*/
