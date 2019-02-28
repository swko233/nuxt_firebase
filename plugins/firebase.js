import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAE4vAw4rPOaBozCTjs8Q83uoM1QgnLw5s",
    authDomain: "nuxt-firebase-8c0ca.firebaseapp.com",
    databaseURL: "https://nuxt-firebase-8c0ca.firebaseio.com",
    projectId: "nuxt-firebase-8c0ca",
    storageBucket: "nuxt-firebase-8c0ca.appspot.com",
    messagingSenderId: "713443344663"
  })
}

export default firebase