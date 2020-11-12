
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCAem1QaJLdEljM-DlJNH7pMBBOoB7gwDY",
    authDomain: "luscious-2a16f.firebaseapp.com",
    databaseURL: "https://luscious-2a16f.firebaseio.com",
    projectId: "luscious-2a16f",
    storageBucket: "luscious-2a16f.appspot.com",
    messagingSenderId: "519784968378",
    appId: "1:519784968378:web:61c490599c3ad7edecd283"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig)

const db=firebaseApp.firestore();
const auth= firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db;