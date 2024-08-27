import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
const firebaseConfig = {
  apiKey: "AIzaSyAamcMcuyl_CMKop63T5gH7r90GnJL75a0",
  authDomain: "appcripto-7a5b8.firebaseapp.com",
  projectId: "appcripto-7a5b8",
  storageBucket: "appcripto-7a5b8.appspot.com",
  messagingSenderId: "70167959327",
  appId: "1:70167959327:web:69a0f258416b06d4f1022a"
};


const app = initializeApp(firebaseConfig);
export const firestore= getFirestore(app);