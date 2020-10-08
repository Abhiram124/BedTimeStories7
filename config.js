import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCtKC-CO-47C540F1UnMimPSfQOHH-kOgs",
  authDomain: "bedtimestories-b5d8e.firebaseapp.com",
  databaseURL: "https://bedtimestories-b5d8e.firebaseio.com",
  projectId: "bedtimestories-b5d8e",
  storageBucket: "bedtimestories-b5d8e.appspot.com",
  messagingSenderId: "1007434670299",
  appId: "1:1007434670299:web:a51e8d9544c619ce7cacfe"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()