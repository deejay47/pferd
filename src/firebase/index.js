import firebase from 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_CONFIG_APIKEY,
        authDomain: process.env.REACT_APP_FIREBASE_CONFIG_AUTHDOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_CONFIG_PROJECTID,
        storageBucket: process.env.REACT_APP_FIREBASE_CONFIG_STORAGEBUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_CONFIG_MESAGGINGSENDERID,
        appId: process.env.REACT_APP_FIREBASE_CONFIG_APPID,
        measurementId: process.env.REACT_APP_FIREBASE_CONFIG_MEASUREMENTID
}

const app = firebase.initializeApp(firebaseConfig)

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}