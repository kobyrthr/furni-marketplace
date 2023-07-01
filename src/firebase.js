// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBltulmvCZPeRsPl3uz1Ot8joPwmFxQU6E",
  authDomain: "first-firebase-deploy-2bbd7.firebaseapp.com",
  projectId: "first-firebase-deploy-2bbd7",
  storageBucket: "first-firebase-deploy-2bbd7.appspot.com",
  messagingSenderId: "767299961164",
  appId: "1:767299961164:web:7ee7b097da7bae055ecfe9",
  measurementId: "G-T2KVQY2M2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);