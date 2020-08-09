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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`)
	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const {displayName, email} = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('err creating user', error.messege)
		}
	}

	return userRef;
};

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc()
		batch.set(newDocRef, obj)
		console.log(newDocRef)
	});
	return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollections = collections.docs.map(doc => {
		const { items , title } = doc.data();
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		}
		
	})

	return transformedCollections.reduce((accum,collection) => {
		accum[collection.title.toLowerCase()] = collection;
		return accum;
	},{})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;