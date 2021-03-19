import firebase from 'firebase'

import 'firebase/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAXCKvc8YUU379xiUpUJDAblp2zKytdWvI",
    authDomain: "appinventario-e7c5f.firebaseapp.com",
    projectId: "appinventario-e7c5f",
    storageBucket: "appinventario-e7c5f.appspot.com",
    messagingSenderId: "450805956033",
    appId: "1:450805956033:web:15cee68d4af4b1b8030340"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()

  export default{
      firebase,
      db
  }