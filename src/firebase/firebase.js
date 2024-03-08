import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4fX6E5HrWjHAoQQ-vdHHSek4g8b8XRFg",
  authDomain: "instagram-clone-b8d77.firebaseapp.com",
  projectId: "instagram-clone-b8d77",
  storageBucket: "instagram-clone-b8d77.appspot.com",
  messagingSenderId: "148727669548",
  appId: "1:148727669548:web:2a63f651d560d14d1cc289",
  measurementId: "G-GK3FPZK0VG"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
