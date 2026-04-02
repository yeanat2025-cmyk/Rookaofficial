// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_qWfwC0YcWHxjs16d6LnAxzKBZg0a0P0",
  authDomain: "titi-live1.firebaseapp.com",
  projectId: "titi-live1",
  storageBucket: "titi-live1.appspot.com",
  messagingSenderId: "184688632840",
  appId: "1:184688632840:web:85caa04f3884ca5c609dbd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);