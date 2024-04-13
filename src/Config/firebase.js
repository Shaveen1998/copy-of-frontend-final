// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCth6l6A5J6Pxw3s32b6drMPf3MAyv5beI",
  authDomain: "theboat-ec38e.firebaseapp.com",
  projectId: "theboat-ec38e",
  storageBucket: "theboat-ec38e.appspot.com",
  messagingSenderId: "546892310201",
  appId: "1:546892310201:web:267ab1f61e3e855cd2dd68",
  measurementId: "G-N0QCR6S3YD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

const analytics = getAnalytics(app);
