import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDjl97F2bW8TVo6CNDMu5WaQ2mOxpbXS6Y",
    authDomain: "crwn-db-3e640.firebaseapp.com",
    databaseURL: "https://crwn-db-3e640.firebaseio.com",
    projectId: "crwn-db-3e640",
    storageBucket: "",
    messagingSenderId: "473485881575",
    appId: "1:473485881575:web:fd4312da68258f1f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestor = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;






