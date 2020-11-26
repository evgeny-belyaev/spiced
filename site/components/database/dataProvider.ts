import firebase from "firebase"
import { Database } from "../constants"
import { Logger } from "../logger"
import { isIntegration } from "../../api/utils"

const log = new Logger("dataProvider")

function getFirebaseConfig() {
    if (process.env["NODE_ENV"] == "development" || process.env["NODE_ENV"] == "test" || isIntegration()) {
        return {
            databaseURL: "http://localhost:9000/?ns=spiced-f9677"
        }
    } else {
        return {
            apiKey: Database.accessToken,
            databaseURL: Database.url
        }
    }
}

export const getFirebaseDatabase = (): firebase.database.Database => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(getFirebaseConfig())

        log.debug("Firebase app created")
    }

    return firebase.database()
}
