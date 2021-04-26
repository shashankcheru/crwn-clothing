import firebase from 'firebase/app';

import 'firebase/firestore'; //for database
import 'firebase/auth';  // for auth

const config = {
    apiKey: "AIzaSyB29s6NJdAclpod6RSiTm3H2ArliWDofNA",
    authDomain: "crwn-db-b3907.firebaseapp.com",
    projectId: "crwn-db-b3907",
    storageBucket: "crwn-db-b3907.appspot.com",
    messagingSenderId: "1072645646842",
    appId: "1:1072645646842:web:507a660fd34c9142c25c43",
    measurementId: "G-QEP0MKRV44"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;