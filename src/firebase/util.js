import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHUS6_1Diij6hQurXajrJOdt-tA43DeiA",
  authDomain: "shopmestore-88a11.firebaseapp.com",
  databaseURL: "https://shopmestore-88a11.firebaseio.com",
  projectId: "shopmestore-88a11",
  storageBucket: "shopmestore-88a11.appspot.com",
  messagingSenderId: "550076746182",
  appId: "1:550076746182:web:dc0cf9c67c355a15a78ac7",
  measurementId: "G-QE77LDDFVD",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const handleSignInWithGoogle = () => auth.signInWithPopup(provider);
