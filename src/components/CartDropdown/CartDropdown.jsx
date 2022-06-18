import React from 'react';

import CustomButton from '../UI/Buttons/CustomButton';

import './CartDropdown.scss';

const CartDropdown = () => {
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'></div>
			<CustomButton>I want it now!</CustomButton>
		</div>
	);
};

export default CartDropdown;
