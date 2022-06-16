import { useEffect } from 'react';
import {
	auth,
	createUserDocumentFromAuth,
	signInWithGoogleRedirect,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase';

import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/signUpForm/SignUpForm';

const SignIn = () => {
	const logUserWithRedirect = async () => {
		const response = await getRedirectResult(auth);
		console.log(response);
		if (response) {
			const userDocRef = await createUserDocumentFromAuth(response.user);
		}
	};

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	useEffect(() => {
		logUserWithRedirect();
	}, []);
	return (
		<>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign in with Google</button>
			<button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
			<SignUpForm />
		</>
	);
};

export default SignIn;
