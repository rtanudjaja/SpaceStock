import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAA4n9pwQq1cP-7knNesfTJsYJyP2WCkSU",
  authDomain: "spacestock-test.firebaseapp.com",
  databaseURL: "https://spacestock-test.firebaseio.com",
  projectId: "spacestock-test",
  storageBucket: "spacestock-test.appspot.com",
  messagingSenderId: "1038701543282",
  appId: "1:1038701543282:web:9d2ccc689d87125b47e7eb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;