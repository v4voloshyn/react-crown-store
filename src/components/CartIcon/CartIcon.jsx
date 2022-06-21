import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

import { Icon, IconContainer, ItemCount } from './CartIcon.styles';

const CartIcon = () => {
	const { setIsCartOpen, cartItemsCount } = useContext(CartContext);

	const toggleIsCartOpen = () => {
		setIsCartOpen((prevState) => !prevState);
	};

	return (
		<>
			<IconContainer onClick={toggleIsCartOpen}>
				<Icon />
				<ItemCount>{cartItemsCount}</ItemCount>
			</IconContainer>
		</>
	);
};

export default CartIcon;
