// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw4ZO0VCTS16fo8fBYaT1DQnD7EZi5S0I",
  authDomain: "myblog-18989.firebaseapp.com",
  projectId: "myblog-18989",
  storageBucket: "myblog-18989.appspot.com",
  messagingSenderId: "352097208228",
  appId: "1:352097208228:web:b8c81b50ba3ce7f00b2331"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage }
