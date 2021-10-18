import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVz8-_BbsRbvTfP28n1X10WHAsD_URVnM",
  authDomain: "leilao-1366f.firebaseapp.com",
  projectId: "leilao-1366f",
  storageBucket: "leilao-1366f.appspot.com",
  messagingSenderId: "934151595147",
  appId: "1:934151595147:web:c341103e491cb7b9d3e08e"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();