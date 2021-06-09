import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAT6dmAaYorqhdA-WJc58Zj7AL_n7pYvKk",
    authDomain: "linkedin-clone-57522.firebaseapp.com",
    projectId: "linkedin-clone-57522",
    storageBucket: "linkedin-clone-57522.appspot.com",
    messagingSenderId: "862542341767",
    appId: "1:862542341767:web:1c1854f2e10d55cd97fa22",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };