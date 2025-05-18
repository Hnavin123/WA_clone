// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxTk0QhfM1FSbAJ8mZeyyDIm-Ybv7E_Xw",
  authDomain: "wa-clone-f10f6.firebaseapp.com",
  projectId: "wa-clone-f10f6",
  storageBucket: "wa-clone-f10f6.firebasestorage.app",
  messagingSenderId: "141979529654",
  appId: "1:141979529654:web:bd5097d8d8de1122bcd117",
  measurementId: "G-R8JTEHVMSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
