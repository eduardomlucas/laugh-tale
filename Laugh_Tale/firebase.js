import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import 'firebase/firestore';
import 'firebase/storage';


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


const getDataFromFirestore = async (collectionName) => {
  try {
    const snapshot = await firebase.firestore().collection(collectionName).get();
    const dataArray = snapshot.docs.map((doc) => doc.data());
    return dataArray;
  } catch (error) {
    console.error('Erro ao obter dados do Firestore:', error);
    return [];
  }
};

const getAndDisplayImageFromStorage = async (manga) => {
  try {
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child('/mangas/'+manga);

    const url = await imageRef.getDownloadURL();
    return url;
  } catch (error) {
    console.error('Erro ao obter imagem do Firebase Storage:', error);
    return null;
  }
};

const getPhotosArrayFromStorage = async (manga) => {
  try {
    const storageRef = firebase.storage().ref();
    const photosRef = storageRef.child("/mangas/"+manga);

    const result = await photosRef.listAll();

    const photoURLs = (await Promise.all(result.items.map((item) => item.getDownloadURL())));
    
    return photoURLs;
  } catch (error) {
    console.error('Erro ao obter URLs das fotos:', error);
    return [];
  }
};

export { auth, firestore, firebase, storage, getDataFromFirestore, getAndDisplayImageFromStorage, getPhotosArrayFromStorage };