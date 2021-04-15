import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZhUC2gSa2jJUT_AHRWdLc1KqJCMvKj1U",
  authDomain: "clone-cec91.firebaseapp.com",
  projectId: "clone-cec91",
  storageBucket: "clone-cec91.appspot.com",
  messagingSenderId: "908425750904",
  appId: "1:908425750904:web:75b09d6a8577fd9db5408d",
  measurementId: "G-JM6DWM2T6L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
