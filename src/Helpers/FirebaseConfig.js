// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiRPXJohk_mK5QhtJbryAIc93wG9zpGM8",
  authDomain: "react-mydietspy.firebaseapp.com",
  projectId: "react-mydietspy",
  storageBucket: "react-mydietspy.appspot.com",
  messagingSenderId: "829063713066",
  appId: "1:829063713066:web:ea31548cc28e3f7cfa4e53",
  measurementId: "G-1BJQMB2BNJ",
  databaseURL: "https://react-mydietspy-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase();
