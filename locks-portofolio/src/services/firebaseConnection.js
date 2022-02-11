import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

let firebaseConfig = {
  apiKey: "AIzaSyAWv36uRImu4PRzYckp5d9HbxcgygZvJos",
  authDomain: "portfolio-lucas-toffoli.firebaseapp.com",
  projectId: "portfolio-lucas-toffoli",
  storageBucket: "portfolio-lucas-toffoli.appspot.com",
  messagingSenderId: "1093123933919",
  appId: "1:1093123933919:web:4316259671aeefe3e20b6a",
  measurementId: "G-D3WL0V7YZT"
};
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;