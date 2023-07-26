/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getFirestoreLite, collection, getDocs } from 'firebase/firestore/lite';
import { getFirestore, Timestamp, FieldValue, Filter } from 'firebase-admin/firestore';
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithRedirect} from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { signOut } from "firebase/auth";

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { applicationDefault, cert } = require('firebase-admin/app');
const  = require('firebase-admin/firestore');
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
  
//login com facebook
const providerFacebook = new FacebookAuthProvider();
//pegar informacoes adicionais dos usuarios
providerFacebook.addScope('user_birthday');
//consolidar o login atraves de popup com o Facebook
signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
  //redirecionar para pagina de login do fb
  signInWithRedirect(auth, providerFacebook);

//login com google
const providerGoogle = new GoogleAuthProvider();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object



// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const myRefreshToken = '...'; // Get refresh token from OAuth2 flow

initializeApp({
  credential: refreshToken(myRefreshToken),
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Crie um formulário que permita que novos usuários se inscrevam no seu app 
// usando endereço de e-mail e senha. 
// Quando um usuário preencher o formulário, 
// valide o endereço de e-mail e a senha informados por ele 
// e envie-os para o método createUserWithEmailAndPassword:

const authNewUser = getAuth();

//criar novos usuarios
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  //login de usuarios existentes
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  //coletar dados dos usuarios
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

//redirecionar usuarios para pagina de login do Google
signInWithRedirect(auth, providerGoogle);

//e em seguida recuperar o token do goolgle
getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  //para logout
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});