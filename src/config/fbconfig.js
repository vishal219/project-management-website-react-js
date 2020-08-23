import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCd-kvTBNdZFuOKr-gEJtB0aW8bc8eXNNQ",
    authDomain: "the-x-project-54c98.firebaseapp.com",
    databaseURL: "https://the-x-project-54c98.firebaseio.com",
    projectId: "the-x-project-54c98",
    storageBucket: "the-x-project-54c98.appspot.com",
    messagingSenderId: "208591291159",
    appId: "1:208591291159:web:ac15d7630834a394af2d52",
    measurementId: "G-9VQQBN248N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;