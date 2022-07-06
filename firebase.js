// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOeDa7gEYcSXMC1XYJ6XjbGN3n6yVml_o",
  authDomain: "niksquiz.firebaseapp.com",
  projectId: "niksquiz",
  storageBucket: "niksquiz.appspot.com",
  messagingSenderId: "417047094431",
  appId: "1:417047094431:web:ecc846de44b1b16b276eaa"
};

// Initialize Firebase
// let app;
// if ( firebase.apps.length === 0){
//   app = firebase.initializeApp(firebaseConfig);
// } else{
//   app = firebase.app()
// }

// const auth = firebase.auth()

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth};