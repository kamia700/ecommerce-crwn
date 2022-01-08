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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;