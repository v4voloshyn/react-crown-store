import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';

import './Authentification.scss';

const Authentification = () => {
	return (
		<div className='container'>
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentification;
