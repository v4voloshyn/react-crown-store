import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import {
	CheckoutItemContainer,
	ImageContainer,
	BaseSpan,
	Arrow,
	Quantity,
	RemoveButton,
	Value,
} from './CheckoutItem.styles.jsx';

const CheckoutItem = (cartItem) => {
	const { name, price, imageUrl, quantity } = cartItem;

	const { removeItemFromCart, deleteProductFromCart, addItemToCart } = useContext(CartContext);

	const increaseProductQuantity = () => {
		addItemToCart(cartItem);
	};

	const handleRemove = () => {
		removeItemFromCart(cartItem);
	};

	const handleDelete = () => {
		deleteProductFromCart(cartItem);
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
