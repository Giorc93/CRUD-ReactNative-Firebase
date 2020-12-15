import firebase from "firebase";

import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDLNXa1Cs4yQF6Zrf0ZKzHWR0xkRpfcSOA",
  authDomain: "react-native-firebase-ca15c.firebaseapp.com",
  projectId: "react-native-firebase-ca15c",
  storageBucket: "react-native-firebase-ca15c.appspot.com",
  messagingSenderId: "182992589902",
  appId: "1:182992589902:web:8351ea02388d263a4a1f1f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
