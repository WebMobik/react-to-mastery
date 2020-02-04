import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDRz8_yrabGLjTmgG_TIZLZDaxmUZbUta8",
    authDomain: "react-shop-ed474.firebaseapp.com",
    databaseURL: "https://react-shop-ed474.firebaseio.com",
    projectId: "react-shop-ed474",
    storageBucket: "react-shop-ed474.appspot.com",
    messagingSenderId: "320364608999",
    appId: "1:320364608999:web:9321104f46dbc8ee30d142"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

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
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
