import { CartItemContainer, ItemDetails } from './CartItem.styles';

const CartItem = ({ cartItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;
	return (
		<CartItemContainer>
			<img src={imageUrl} alt={name} />
			<ItemDetails>
				<span className='name'>{name}</span>
				<span className='price'>
					{quantity} x ${price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
