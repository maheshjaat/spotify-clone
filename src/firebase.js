// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-j_E7IvSr1lSnwrdJV988pZph7S4kkEA",
  authDomain: "spotify-clone-d0fce.firebaseapp.com",
  projectId: "spotify-clone-d0fce",
  storageBucket: "spotify-clone-d0fce.appspot.com",
  messagingSenderId: "45761895690",
  appId: "1:45761895690:web:d0daed41de2188ba74eef3",
  measurementId: "G-X1DZMDVF1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);