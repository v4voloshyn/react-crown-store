import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

export const firestoreDB = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
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
			});
		} catch (error) {
			console.log('Error of creating a new user', error.message);
		}
	}
	console.log(userDocRef);
	return userDocRef;
};
