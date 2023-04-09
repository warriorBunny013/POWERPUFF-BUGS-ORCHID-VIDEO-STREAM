import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAG83JpbHtpmx-xrOJ9VMmWd13nsmBHCl4",
  authDomain: "orchid-firebase.firebaseapp.com",
  projectId: "orchid-firebase",
  storageBucket: "orchid-firebase.appspot.com",
  messagingSenderId: "198765237812",
  appId: "1:198765237812:web:a426b5521c21f7b601dc61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app,auth};