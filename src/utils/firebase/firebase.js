import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore();
export const auth = getAuth();

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
	console.log(userDocRef);
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
