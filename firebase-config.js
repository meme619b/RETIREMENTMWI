{
  "hosting": {
    "public": ".",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  }
}
npm install firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA46ewpctH_mTp-dMo3XMfduvomIL43vKs",
  authDomain: "retirement-dashboard.firebaseapp.com",
  projectId: "retirement-dashboard",
  storageBucket: "retirement-dashboard.firebasestorage.app",
  messagingSenderId: "361176003253",
  appId: "1:361176003253:web:012bc9148494524cbb84fc",
  measurementId: "G-125DC6MC2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
