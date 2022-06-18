import React from 'react';

import './CartItem.scss';

const CartItem = ({ cartItem }) => {
	const { name, quantity } = cartItem;
	return (
		<div className='cart-item'>
			<p>{name}</p>
			<span>{quantity}</span>
		</div>
	);
};

export default CartItem;
