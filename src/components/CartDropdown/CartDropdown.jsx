import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

import CartItem from '../CartItem/CartItem';

import CustomButton from '../UI/Buttons/CustomButton';

import './CartDropdown.scss';

const CartDropdown = () => {
	const { cartItems, setIsCartOpen } = useContext(CartContext);
	const navigate = useNavigate();

	const go2CheckoutPage = () => {
		navigate('/checkout');
		setIsCartOpen(false);
	};

	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<CartItem cartItem={item} key={item.id} />
				))}
			</div>
			<CustomButton style={{ flex: '0 1 auto' }} onClick={go2CheckoutPage}>
				I want it now!
			</CustomButton>
		</div>
	);
};

export default CartDropdown;
