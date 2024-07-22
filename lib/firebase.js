// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "portfolibles.firebaseapp.com",
  projectId: "portfolibles",
  storageBucket: "portfolibles.appspot.com",
  messagingSenderId: "266386934932",
  appId: "1:266386934932:web:261529abd27d2981cb3881"
};

// Initialize Firebase
const app =!getApps().lenghth ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app)
const storage = getStorage(app);

export { db,storage }