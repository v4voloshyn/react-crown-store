import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = () => {
	const { setIsCartOpen, cartItemsCount } = useContext(CartContext);

	const toggleIsCartOpen = () => {
		setIsCartOpen((prevState) => !prevState);
	};

	return (
		<>
			<div className='cart-icon-container' onClick={toggleIsCartOpen}>
				<ShoppingCartIcon className='shopping-icon' />
				<span className='item-count'>{cartItemsCount}</span>
			</div>
		</>
	);
};

export default CartIcon;
