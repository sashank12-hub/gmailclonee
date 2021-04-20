// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAXvxup_GTOVUYvXTrH05lAE1kmONp4K0k",
    authDomain: "clone-f80b2.firebaseapp.com",
    projectId: "clone-f80b2",
    storageBucket: "clone-f80b2.appspot.com",
    messagingSenderId: "510625100007",
    appId: "1:510625100007:web:3187028830b7194a80b242",
    measurementId: "G-EQY5NXD8YK"
  };
const firebaseapp=firebase.initializeApp(firebaseConfig)
const auth=firebase.auth()
const db=firebaseapp.firestore();
const provider=new firebase.auth.GoogleAuthProvider()
export {db,auth,provider}