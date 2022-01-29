import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCoFT_ruhl9_7_S_p4zGozx-h2CIWNlrHw",
    authDomain: "lucas-protfolio.firebaseapp.com",
    projectId: "lucas-protfolio",
    storageBucket: "lucas-protfolio.appspot.com",
    messagingSenderId: "1005526464571",
    appId: "1:1005526464571:web:d9cd573a3845a890cfc41e",
    measurementId: "G-ZHSLWYCDW5"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;