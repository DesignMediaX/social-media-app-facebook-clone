import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTezT8hv-SGmQ63Uu4gdAeZD_rO2b8BIM",
  authDomain: "facebook-clone-d98a5.firebaseapp.com",
  projectId: "facebook-clone-d98a5",
  storageBucket: "facebook-clone-d98a5.appspot.com",
  messagingSenderId: "533021321998",
  appId: "1:533021321998:web:0916ada2c82d546a43455f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage();
export const db = getFirestore(app);
