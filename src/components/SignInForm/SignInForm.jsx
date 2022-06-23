import './SignInForm.scss';

import CustomButton, { BUTTON_CLASSES } from '../../components/UI/Buttons/CustomButton';
import {
	auth,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase';

import CustomInput from '../../components/UI/Inputs/CustomInput';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// import { getRedirectResult } from 'firebase/auth';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const navigate = useNavigate();

	const handleChangeInputFields = (e) => {
		const { name, value } = e.target;
		setFormFields({
			...formFields,
			[name]: value,
		});
	};

	const signInWithGoogle = async () => {
		const response = await signInWithGooglePopup();
		if (response) {
			setFormFields(defaultFormFields); // reset form fields
			navigate('/');
		}
	};

	const handleSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const response = await signInAuthUserWithEmailAndPassword(email, password);
			console.log(response);
			setFormFields(defaultFormFields); // reset form fields
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('The password is incorrect');
					break;
				case 'auth/user-not-found':
					alert('User with this email not found. Try other email');
					break;
				default:
					console.log(error);
			}
		}
	};

	// useEffect(() => {
	// 	logUserWithRedirect();
	// }, []);

	return (
		<div className='auth-container'>
			<h2>I already have an account</h2>
			<span>Sign up with your email and password</span>
			<form className='form' onSubmit={handleSubmitForm}>
				<CustomInput
					label='Email'
					type='email'
					id='input-email'
					required
					name='email'
					value={email}
					onChange={handleChangeInputFields}
				/>

				<CustomInput
					label='Password'
					type='password'
					id='input-password-repeat'
					required
					name='password'
					value={password}
					onChange={handleChangeInputFields}
				/>
				<div className='buttons-container'>
					<CustomButton buttonType={BUTTON_CLASSES.base}>Sign in!</CustomButton>
					<CustomButton buttonType={BUTTON_CLASSES.google} type='button' onClick={signInWithGoogle}>
						Sign in with Google
					</CustomButton>
				</div>
				{/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
			</form>
		</div>
	);
};

export default SignInForm;
