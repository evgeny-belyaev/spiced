import firebase from "firebase"
import { Database, getCurrentEnvironment } from "../constants"
import { Logger } from "../logger"

const log = new Logger("dataProvider")

function getFirebaseConfig() {
    switch (getCurrentEnvironment()) {
        case "local":
        case "localTest":
            return {
                databaseURL: "http://localhost:9000/?ns=spiced-f9677"
            }
        case "production":
            return {
                apiKey: Database.accessToken,
                databaseURL: Database.url
            }
        default:
            throw new Error("Invalid environment")
    }
}

export const getFirebaseDatabase = async (): Promise<firebase.database.Database> => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(getFirebaseConfig())

        const env = getCurrentEnvironment()

        if (env === "production") {
            try {
                await firebase.auth().signInWithEmailAndPassword(Database.user, Database.password)
                log.debug("Firebase auth success")
            } catch (x) {
                log.error(x)
            }
        }

        log.debug(`Firebase app created for environment=${getCurrentEnvironment()}`)
    }

    return firebase.database()
}
