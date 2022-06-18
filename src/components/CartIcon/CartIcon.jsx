import React, { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = () => {
	const { setIsCartOpen } = useContext(CartContext);

	const changeCartModalState = () => {
		setIsCartOpen((prevState) => !prevState);
	};

	return (
		<>
			<div className='cart-icon-container' onClick={changeCartModalState}>
				<ShoppingCartIcon className='shopping-icon' />
				<span className='item-count'>5</span>
			</div>
		</>
	);
};

export default CartIcon;
