// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxBe_ZREdTprEuWKR-tFBCIiUXUz4aMRI",
  authDomain: "final-project-ac6bf.firebaseapp.com",
  projectId: "final-project-ac6bf",
  storageBucket: "final-project-ac6bf.appspot.com",
  messagingSenderId: "174508672213",
  appId: "1:174508672213:web:7e27e3bf933b86f713ce5c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



