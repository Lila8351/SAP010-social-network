import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';


// TODO: Replace the following with your app's Firebase project configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCch5W7bAxAqaliwu2SdGU1-CcXHqt9uBs",
  authDomain: "projetoredessociais-942e3.firebaseapp.com",
  databaseURL: "https://projetoredessociais-942e3-default-rtdb.firebaseio.com",
  projectId: "projetoredessociais-942e3",
  storageBucket: "projetoredessociais-942e3.appspot.com",
  messagingSenderId: "1020709134173",
  appId: "1:1020709134173:web:7ec405d1169cb5f66a12b4",
  measurementId: "G-K81CGS5SX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
