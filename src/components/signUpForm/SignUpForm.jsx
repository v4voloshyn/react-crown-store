import React, { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';

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
		} catch (error) {
			throw new Error(error);
		}

		setFormFields(defaultFormFields);
	};

	return (
		<>
			<h1>Sign up with your email and password</h1>
			<form className='form' onSubmit={handleSubmitForm}>
				<label htmlFor='input-text'>Display name</label>
				<input
					type='text'
					id='input-name'
					required
					name='displayName'
					value={displayName}
					onChange={handleChangeInputFields}
				/>

				<label htmlFor='input-text'>Email</label>
				<input
					type='email'
					id='input-email'
					required
					name='email'
					value={email}
					onChange={handleChangeInputFields}
				/>

				<label htmlFor='input-password'>Password</label>
				<input
					type='password'
					id='input-password-repeat'
					required
					name='password'
					value={password}
					onChange={handleChangeInputFields}
				/>

				<label htmlFor='input-password'>Password repeat</label>
				<input
					type='password'
					id='input-password-repeat'
					required
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChangeInputFields}
				/>

				<button className='form-btn'>Sign up!</button>
			</form>
		</>
	);
};

export default SignUpForm;
