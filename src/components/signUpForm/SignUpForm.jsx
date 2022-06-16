import React, { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';
import CustomButton from '../UI/Buttons/CustomButton';
import CustomInput from '../UI/Inputs/CustomInput';
import './SignUpForm.scss';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const handleChangeInputFields = (e) => {
		const { name, value } = e.target;
		setFormFields({
			...formFields,
			[name]: value,
		});
	};

	const handleSubmitForm = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			throw new Error('The passwords does not match');
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password);

			await createUserDocumentFromAuth(user, { displayName });
			setFormFields(defaultFormFields); // reset form fields
		} catch (error) {
			throw new Error(error);
		}
	};

	return (
		<div className='auth-container'>
			<h2>I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form className='form' onSubmit={handleSubmitForm}>
				<CustomInput
					label='Display name'
					type='text'
					id='input-name'
					required
					name='displayName'
					value={displayName}
					onChange={handleChangeInputFields}
				/>

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

				<CustomInput
					label='Password repeat'
					type='password'
					id='input-password-repeat'
					required
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChangeInputFields}
				/>
				<CustomButton>Sign up!</CustomButton>
			</form>
		</div>
	);
};

export default SignUpForm;
