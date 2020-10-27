import firebase from 'firebase'

function getFirebaseConfig() {
    if (location.hostname === "localhost") {
        return {
            databaseURL: "http://localhost:9000/?ns=spiced-f9677"
        }
    } else {
        return {
            apiKey: "AIzaSyAsoRfHyVtfB0VE-t3eSfgpoEi0FLsXnH0",
            databaseURL: "https://spiced-f9677.firebaseio.com/"
        };
    }
}

export const getDatabase = (): firebase.database.Database => {
    firebase.initializeApp(getFirebaseConfig());
    return firebase.database();
}
