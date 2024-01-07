// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//const firebaseConfig = {
 // apiKey: "AIzaSyAclxtmqrVTlDq4toSkqE2CzMvFEo_FVyg",
  //authDomain: "file-sharing-da110.firebaseapp.com",
  //projectId: "file-sharing-da110",
  //storageBucket: "file-sharing-da110.appspot.com",
  //messagingSenderId: "696797380589",
 // appId: "1:696797380589:web:4d6b08401335e09a3db1e4",
 // measurementId: "G-H2905ZJBYN"
//};
const firebaseConfig = {
  apiKey: "AIzaSyDxJgmsP5mbQsp56rrLGVJx88eQffsZcE4",
  authDomain: "file-sharing-6fe9d.firebaseapp.com",
  projectId: "file-sharing-6fe9d",
  storageBucket: "file-sharing-6fe9d.appspot.com",
  messagingSenderId: "571194149974",
  appId: "1:571194149974:web:c32e077185c542b159bff7",
  measurementId: "G-FLVPBR4VQB"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
