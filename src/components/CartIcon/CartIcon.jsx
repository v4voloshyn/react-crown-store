import React, { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = () => {
	const { setCartDropdownVisible } = useContext(CartContext);

	const changeCartModalState = () => {
		setCartDropdownVisible((prevState) => !prevState);
	};

	return (
		<>
			<div className='cart-icon-container'>
				<ShoppingCartIcon className='shopping-icon' onClick={changeCartModalState} />
				<span className='item-count'>5</span>
			</div>
		</>
	);
};

export default CartIcon;
