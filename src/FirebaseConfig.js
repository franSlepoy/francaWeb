// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXSUJrN2paNVILBPu3JESNUn1bvUIZ9sQ",
  authDomain: "francaweb-25330.firebaseapp.com",
  projectId: "francaweb-25330",
  storageBucket: "francaweb-25330.appspot.com",
  messagingSenderId: "525911309661",
  appId: "1:525911309661:web:240d0d7c99e6ed9485fcb4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// LOS SERVICIOS

// auth

//login

export const onSigIn = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
