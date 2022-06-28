import {
	Arrow,
	BaseSpan,
	CheckoutItemContainer,
	ImageContainer,
	Quantity,
	RemoveButton,
	Value,
} from './CheckoutItem.styles.jsx';
import {
	addItemToCart,
	deleteProductFromCart,
	removeItemFromCart,
} from '../../redux/cartStore/cart.action';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../redux/cartStore/cart.selector';

const CheckoutItem = (cartItem) => {
	const dispatch = useDispatch();
	const { name, price, imageUrl, quantity } = cartItem;

	const cartItems = useSelector(selectCartItems);

	const increaseProductQuantity = () => {
		dispatch(addItemToCart(cartItems, cartItem));
	};

	const handleRemove = () => {
		dispatch(removeItemFromCart(cartItems, cartItem));
	};

	const handleDelete = () => {
		dispatch(deleteProductFromCart(cartItems, cartItem));
	};

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<BaseSpan>{name}</BaseSpan>
			<Quantity>
				<Arrow onClick={handleRemove}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={increaseProductQuantity}>&#10095;</Arrow>
			</Quantity>
			<BaseSpan>${price}</BaseSpan>
			<RemoveButton onClick={handleDelete}>&times;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
