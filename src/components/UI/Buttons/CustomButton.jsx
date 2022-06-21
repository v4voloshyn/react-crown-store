import { DefaultButton, InvertedDefaultButton, GoogleSignInButton } from './Buttons.styles';

export const BUTTON_CLASSES = {
	base: 'base',
	google: 'google-sign-in',
	inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_CLASSES.base) =>
	({
		[BUTTON_CLASSES.base]: DefaultButton,
		[BUTTON_CLASSES.google]: GoogleSignInButton,
		[BUTTON_CLASSES.inverted]: InvertedDefaultButton,
	}[buttonType]);

const CustomButton = ({ children, buttonType, ...otherProps }) => {
	const ButtonToRender = getButton(buttonType);
	return <ButtonToRender {...otherProps}>{children}</ButtonToRender>;
};

export default CustomButton;
