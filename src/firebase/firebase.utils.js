import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
  apiKey: "AIzaSyCb5UjCDAujbmC_mw-5zOBlIm-XicEwp1Q",
  authDomain: "crwn-db-4a082.firebaseapp.com",
  databaseURL: "https://crwn-db-4a082.firebaseio.com",
  projectId: "crwn-db-4a082",
  storageBucket: "",
  messagingSenderId: "315265838926",
  appId: "1:315265838926:web:7fd334a393980dc3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

   if(!snapShot.exists) {
     const { displayName, email } = userAuth;
     const createdAt = new Date();

     try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
     } catch (error) {
        console.log('error creating user', error.message)
     }
   }

   return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
