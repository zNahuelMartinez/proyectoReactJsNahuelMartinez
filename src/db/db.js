import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXAi8VyrPxrlev3EjgyxdkKiTSrXM24yg",
  authDomain: "nahushop-2f99f.firebaseapp.com",
  projectId: "nahushop-2f99f",
  storageBucket: "nahushop-2f99f.appspot.com",
  messagingSenderId: "669598541542",
  appId: "1:669598541542:web:9536a8155ada9b61ddbd27"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db