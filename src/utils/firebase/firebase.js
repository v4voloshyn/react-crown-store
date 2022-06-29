import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signInWithRedirect,
	signOut,
} from 'firebase/auth';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	query,
	setDoc,
	writeBatch,
} from 'firebase/firestore';

import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from 'firebase/app';

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDB = getFirestore();

export const auth = getAuth();

export const addCollectionAndDocuments = async (collectionKeyname, objectsToAdd) => {
	// creating collection
	const collectionRef = collection(firestoreDB, collectionKeyname);

	// transaction method (success or fail) with *writeBatch*
	const batch = writeBatch(firestoreDB);
	// push Documents to created collection (write collection to the firebase)
	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log('Butching is done!');
};

export const getCollectionAndDocuments = async (collectionName) => {
	const collectionRef = collection(firestoreDB, collectionName);

	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
	if (!userAuth) return;

	const userDocRef = doc(firestoreDB, 'users', userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInfo,
			});
		} catch (error) {
			console.log('Error of creating a new user', error.message);
		}
	}
	// console.log(userDocRef);
	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
