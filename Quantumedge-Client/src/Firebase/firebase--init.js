// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9ktcfFOLUKfnmjyPonySU5PxV6igGFG4",
    authDomain: "quantumedge-77a74.firebaseapp.com",
    projectId: "quantumedge-77a74",
    storageBucket: "quantumedge-77a74.firebasestorage.app",
    messagingSenderId: "39654861398",
    appId: "1:39654861398:web:f1498d31d43aa0d93ce9f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);