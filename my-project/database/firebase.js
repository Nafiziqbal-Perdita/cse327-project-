// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJwdCvQEMrUZQSzL7nbUCBsbPICZv1Cbg",
  authDomain: "organic-food-ecommerce.firebaseapp.com",
  projectId: "organic-food-ecommerce",
  storageBucket: "organic-food-ecommerce.appspot.com",
  messagingSenderId: "454140506001",
  appId: "1:454140506001:web:de51cd2c403fc35521f430",
  measurementId: "G-X1SDKJ8XW7",

  // apiKey: "AIzaSyCc-6bO4lFqJ68uNpidtGhwvD2K2AMp48I",
  // authDomain: "cse327-15674.firebaseapp.com",
  // databaseURL: "https://cse327-15674-default-rtdb.firebaseio.com",
  // projectId: "cse327-15674",
  // storageBucket: "cse327-15674.appspot.com",
  // messagingSenderId: "971680928632",
  // appId: "1:971680928632:web:802e5a86263a8cce856e8d",
  // measurementId: "G-JFJGY1KLCN",
};

// Initialize Firebase

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export { firebaseConfig, app };
