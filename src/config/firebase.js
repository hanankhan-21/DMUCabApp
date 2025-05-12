// src/config/firebase.js

import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
//import { getFirestore } from "firebase/firestore";
//import { getStorage } from "firebase/storage";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK_O42K3Fgz-GAZwXQFCQGWUCdk9XZz2c",
  authDomain: "dmucabapp.firebaseapp.com",
  projectId: "dmucabapp",
  storageBucket: "dmucabapp.appspot.com",
  messagingSenderId: "404879806612",
  appId: "1:404879806612:web:cdd7a41737c00a9e002481"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
//const auth = getAuth(app);
//const db = getFirestore(app);
//const storage = getStorage(app);

//export { auth, db, storage };

