import React, { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

import CartItem from '../CartItem/CartItem';

import CustomButton from '../UI/Buttons/CustomButton';

import './CartDropdown.scss';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);

	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<CartItem cartItem={item} key={item.id} />
				))}
			</div>
			<CustomButton style={{ flex: '0 1 auto' }}>I want it now!</CustomButton>
		</div>
	);
};

export default CartDropdown;
