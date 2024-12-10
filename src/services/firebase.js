import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBcWaYWpdByNNsKVS7fgxhn4oyhpBDIJLQ",
  authDomain: "vibe-snap.firebaseapp.com",
  projectId: "vibe-snap",
  storageBucket: "vibe-snap.firebasestorage.app",
  messagingSenderId: "944641652348",
  appId: "1:944641652348:web:1fe573b54caebe250e7bf9",
  measurementId: "G-BFE7315EDW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};