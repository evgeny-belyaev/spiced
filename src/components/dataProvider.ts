import firebase from 'firebase';
import { Logger } from './logger';

const log = new Logger("dataProvider")

function getFirebaseConfig() {
    if (process.env["NODE_ENV"] == "development") {
        return {
            databaseURL: "http://localhost:9000/?ns=spiced-f9677"
        }
    } else {
        return {
            apiKey: "AIzaSyAsoRfHyVtfB0VE-t3eSfgpoEi0FLsXnH0",
            databaseURL: "https://spiced-f9677.firebaseio.com/"
        }
    }
}

export const getDatabase = (): firebase.database.Database => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(getFirebaseConfig())

        log.debug("Firebase app created")
    } 
    
    return firebase.database()
}
