/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, signInWithPopup,getAuth , FacebookAuthProvider} from "firebase/auth";
import { getFirestore , collection, addDoc ,doc} from "firebase/firestore";



import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCTe3Pw6QRNACfK2coMF0BY8uS3HPjkJw8",
  authDomain: "clothing-store-f93b8.firebaseapp.com",
  projectId: "clothing-store-f93b8",
  storageBucket: "clothing-store-f93b8.appspot.com",
  messagingSenderId: "944635644974",
  appId: "1:944635644974:web:bd38360ee031a85bc2a3bf",
  measurementId: "G-Y1775S0D8K"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
//user ref is used to modify data
  const userRef = firestore.doc(`users/${userAuth.uid}`);
//snap shot represent the data
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;





////////////////////////////////////////////////////////////////////////////////////////////////
/*
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTe3Pw6QRNACfK2coMF0BY8uS3HPjkJw8",
  authDomain: "clothing-store-f93b8.firebaseapp.com",
  projectId: "clothing-store-f93b8",
  storageBucket: "clothing-store-f93b8.appspot.com",
  messagingSenderId: "944635644974",
  appId: "1:944635644974:web:bd38360ee031a85bc2a3bf",
  measurementId: "G-Y1775S0D8K"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//firestore database
const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db,`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};




// Initialize Firebase



const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});
//provider.setCustomParameters({ prompt: 'select_account' });
//export const signInWithGoogle = () => signInWithPopup(provider);
export const auth = getAuth();
const authfb = getAuth();
authfb.languageCode = 'it';


const providerfb = new FacebookAuthProvider();
providerfb.setCustomParameters({
  'login_hint': 'user@example.com'
});

export const signInWithGoogle  = () => {signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })};
  
  export const signInWitFacebook  = () => {signInWithPopup(authfb, providerfb)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      // ...
    })};
  

*/