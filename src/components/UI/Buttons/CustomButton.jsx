import React from 'react';
import './Buttons.scss';

const BUTTON_CLASSES = {
	google: ' google-sign-in',
	inverted: ' inverted',
};

const CustomButton = ({ children, buttonType = '', ...otherProps }) => {
	return (
		<button
			className={`button-container${buttonType && BUTTON_CLASSES[buttonType]}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
