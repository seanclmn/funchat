import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCkwaZiSW8LxW-0kODvTxRSB3YzEL1wYwI",
    authDomain: "fir-practice-85948.firebaseapp.com",
    projectId: "fir-practice-85948",
    storageBucket: "fir-practice-85948.appspot.com",
    messagingSenderId: "77523700392",
    appId: "1:77523700392:web:033684b4b7f0220d93509d"
})

export const auth = firebase.auth()
export const storage = firebase.storage()
export default app
