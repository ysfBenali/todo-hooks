import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyAMM2L80TeKQ0P6wAOw0YGLfOMe3sA9WCs",
  authDomain: "todoapp-5d7cd.firebaseapp.com",
  databaseURL: "https://todoapp-5d7cd.firebaseio.com",
  projectId: "todoapp-5d7cd",
  storageBucket: "todoapp-5d7cd.appspot.com",
  messagingSenderId: "985557168883",
  appId: "1:985557168883:web:04aac6a1e4ae8193257d86",
  measurementId: "G-N1ZN7FS0M3"
});

const db = firebaseApp.firestore(); 

export default db;