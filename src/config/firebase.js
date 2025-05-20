import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDK_O42K3Fgz-GAZwXQFCQGWUCdk9XZz2c",
  authDomain: "dmucabapp.firebaseapp.com",
  projectId: "dmucabapp",
  storageBucket: "dmucabapp.appspot.com",
  messagingSenderId: "404879806612",
  appId: "1:404879806612:web:cdd7a41737c00a9e002481"
};

// ✅ Initialize app
const app = initializeApp(firebaseConfig);

// ✅ Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// ✅ Export everything you need
export { app, auth, db, storage };
