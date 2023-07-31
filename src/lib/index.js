import { auth } from './configFirebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { feedHeader } from '../pages/feed/feed.js';

function validadeLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export { validadeLogin };
