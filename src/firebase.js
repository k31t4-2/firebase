import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAVOMcETnVwdWiSC0S95rSWN3SbQmkm6A",
  authDomain: "fir-react-tutorial-3021d.firebaseapp.com",
  projectId: "fir-react-tutorial-3021d",
  storageBucket: "fir-react-tutorial-3021d.appspot.com",
  messagingSenderId: "239219689290",
  appId: "1:239219689290:web:18f31031d241c0b00fa3b3"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export default db;
