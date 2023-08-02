import { auth } from './configFirebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { feedHeader } from '../pages/feed/feed.js';

function validadeLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export { validadeLogin };

function createUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export { createUser };
