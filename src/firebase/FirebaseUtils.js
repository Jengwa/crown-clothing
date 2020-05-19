import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyC2P0_08qhNInEE25vN19jP40364U15qA8",
	authDomain: "crown-clothing-72f1d.firebaseapp.com",
	databaseURL: "https://crown-clothing-72f1d.firebaseio.com",
	projectId: "crown-clothing-72f1d",
	storageBucket: "crown-clothing-72f1d.appspot.com",
	messagingSenderId: "583204668679",
	appId: "1:583204668679:web:3dd97aa3bfb3d7c00671a2",
	measurementId: "G-KJZ6288C15"
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;