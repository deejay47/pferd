import firebase from 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
        apiKey: "AIzaSyAIzxzUVvHrkbTYsW6NBm3_dDewbXCw2yA",
        authDomain: "pferd-store.firebaseapp.com",
        projectId: "pferd-store",
        storageBucket: "pferd-store.appspot.com",
        messagingSenderId: "277923283408",
        appId: "1:277923283408:web:f5f9bfc5cf85520b5279d5",
        measurementId: "G-Q6BDW8JMBW"
}

const app = firebase.initializeApp(firebaseConfig)

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}