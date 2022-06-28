import { Icon, IconContainer, ItemCount } from './CartIcon.styles';
import { selectCartItemsCount, selectIsCartOpen } from '../../redux/cartStore/cart.selector';
import { useDispatch, useSelector } from 'react-redux';

import { setIsCartOpen } from '../../redux/cartStore/cart.action';

const CartIcon = () => {
	const dispatch = useDispatch();
	const cartItemsCount = useSelector(selectCartItemsCount);
	const isCartOpen = useSelector(selectIsCartOpen);

	const toggleIsCartOpen = () => {
		dispatch(setIsCartOpen(!isCartOpen));
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
