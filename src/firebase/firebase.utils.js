import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAqtPpuFrHAqek5zZ8noboPDyQJEecNf00",
    authDomain: "crwn-db-30631.firebaseapp.com",
    projectId: "crwn-db-30631",
    storageBucket: "crwn-db-30631.appspot.com",
    messagingSenderId: "953428564714",
    appId: "1:953428564714:web:9a5fec1a6fee82195a9593",
    measurementId: "G-ELHW45LL79"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;