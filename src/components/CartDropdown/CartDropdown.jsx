import React, { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

import CustomButton from '../UI/Buttons/CustomButton';

import './CartDropdown.scss';

const CartDropdown = () => {
	const { isDropdownVisible } = useContext(CartContext);

	return (
		isDropdownVisible && (
			<div className='cart-dropdown-container'>
				<div className='cart-items'></div>
				<CustomButton>I want it now!</CustomButton>
			</div>
		)
	);
};

export default CartDropdown;
