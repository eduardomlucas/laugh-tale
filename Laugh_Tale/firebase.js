import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


//firebase key
const firebaseConfig = {
  apiKey: "AIzaSyApJxkf6pLfoJXzYAZy35FZtPNf1WCDSZ0",
  authDomain: "laugh-tale-17d13.firebaseapp.com",
  projectId: "laugh-tale-17d13",
  storageBucket: "laugh-tale-17d13.appspot.com",
  messagingSenderId: "418716871059",
  appId: "1:418716871059:web:137e13b7becb60d8096066",
  measurementId: "G-55KYK9JFJX"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()
const storage = firebase.storage()
export { auth, firestore, firebase, storage };