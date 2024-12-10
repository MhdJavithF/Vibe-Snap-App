import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZeQiwwb6mrw1J3tBlWuJMc_TdjZJ4Kb8",
  authDomain: "vibe-snap-76265.firebaseapp.com",
  projectId: "vibe-snap-76265",
  storageBucket: "vibe-snap-76265.firebasestorage.app",
  messagingSenderId: "730556325624",
  appId: "1:730556325624:web:273f52e225aa71af92a50d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};