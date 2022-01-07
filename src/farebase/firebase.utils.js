import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCORDjA5SsDebn1W4HSEEXD8UVn2ZsuQzE",
  authDomain: "crwn-db-50ba5.firebaseapp.com",
  projectId: "crwn-db-50ba5",
  storageBucket: "crwn-db-50ba5.appspot.com",
  messagingSenderId: "69254136459",
  appId: "1:69254136459:web:f751fae5e5f2bc55f10a8e",
  measurementId: "G-Z3KHLW45YV"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;