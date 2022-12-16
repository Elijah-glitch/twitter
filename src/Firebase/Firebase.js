import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA74ZvfzfZVmopLVsbl88Y02CUaXNWGgwk",
  authDomain: "roblox-29707.firebaseapp.com",
  projectId: "roblox-29707",
  storageBucket: "roblox-29707.appspot.com",
  messagingSenderId: "1025034692104",
  appId: "1:1025034692104:web:628690bd4a9e9bf83293bd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };

export default db;
