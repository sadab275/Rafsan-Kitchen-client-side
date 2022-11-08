// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCD825UgMiQpQmjabJ7aqgWqh2YCeTTN2E",
    authDomain: "rafsan-kitchen.firebaseapp.com",
    projectId: "rafsan-kitchen",
    storageBucket: "rafsan-kitchen.appspot.com",
    messagingSenderId: "401234291214",
    appId: "1:401234291214:web:f07c51f5bb92c5e264aa5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;