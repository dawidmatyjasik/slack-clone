import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAf3fBLHRUFuAabvA6Nk-ZWfo9wy4Z7Qi4",
  authDomain: "slack-clone-eb1d7.firebaseapp.com",
  projectId: "slack-clone-eb1d7",
  storageBucket: "slack-clone-eb1d7.appspot.com",
  messagingSenderId: "1033363395837",
  appId: "1:1033363395837:web:b4d7f7a125c02d46389a94",
  measurementId: "G-BE4WTY15Q8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
