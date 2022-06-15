import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY, // 'IzaSyCnhjFeaBYNiAUbccNagvHFga5rweawfkc' < it's not an apiKey!!
	authDomain: 'crwn-clothes-store-db.firebaseapp.com',
	projectId: 'crwn-clothes-store-db',
	storageBucket: 'crwn-clothes-store-db.appspot.com',
	messagingSenderId: '1078623237379',
	appId: '1:1078623237379:web:978939b11f3fca9854a536',
};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

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
