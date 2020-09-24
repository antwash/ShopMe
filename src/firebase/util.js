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

const fireStoreDbPaths = {
  users: "users/",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const handleSignInWithGoogle = () => auth.signInWithPopup(provider);
export const handleCreateNewUser = async (authenticatedUser) => {
  if (!authenticatedUser) {
    return;
  }

  const userPath = `${fireStoreDbPaths.users}${authenticatedUser.uid}`;
  const userReference = firestore.doc(userPath);
  const snapShot = await userReference.get();

  // Authenticated user already exists in firestore database
  if (snapShot.exists) {
    return userReference;
  }

  // Persist authenticated user in firestore database
  const { displayName, email, metadata } = authenticatedUser;
  const { creationTime } = metadata;

  try {
    await userReference.set({
      email: email,
      userName: displayName,
      creationTimeMs: Date.parse(creationTime),
    });
  } catch (error) {
    console.log(` Error creating user in firestore with email: ${email}`);
  }

  return userReference;
};
