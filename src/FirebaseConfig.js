import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH,
  projectId: import.meta.env.VITE_PROJECT,
  storageBucket: import.meta.env.VITE_STORAGE,
  messagingSenderId: import.meta.env.VITE_MESSAGING,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);

// LOS SERVICIOS

// Login
export const onSignInFirebase = async ({ email, password }) => {
  try {
    let res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// login con google
let GoogleProvider =  new GoogleAuthProvider()
export const loginWithGoogle = async() => {
  try{
    let res = await signInWithPopup(auth, GoogleProvider);
    return res
  } catch(error) {
    console.log(error)
  }
  
};
// register

export const register = async ({ email, password }) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Registro exitoso:", res.user);
    return res.user;
  } catch (error) {
    console.error("Error al registrar:", error.message);
    throw error; // Puedes manejar el error de otra manera según tus necesidades
  }
};


