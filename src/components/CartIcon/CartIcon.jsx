import { Icon, IconContainer, ItemCount } from './CartIcon.styles';

import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const CartIcon = () => {
	const { setIsCartOpen, cartItemsCount } = useContext(CartContext);

	const toggleIsCartOpen = () => {
		setIsCartOpen((prevState) => !prevState);
	};

	return (
		<>
			<IconContainer onClick={toggleIsCartOpen} id='cart'>
				<Icon />
				<ItemCount>{cartItemsCount}</ItemCount>
			</IconContainer>
		</>
	);
};

export default CartIcon;
