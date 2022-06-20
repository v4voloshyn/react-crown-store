import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import './CheckoutItem.scss';

const CheckoutItem = (cartItem) => {
	const { id, name, price, imageUrl, quantity } = cartItem;

	const { decreaseQuantity, deleteItemFromCart, addItemToCart } = useContext(CartContext);

	const increaseProductQuantity = () => {
		addItemToCart(cartItem);
	};

	const decreaseProductQuantity = () => {
		decreaseQuantity(cartItem);
	};

	const handleDelete = (product) => {
		deleteItemFromCart(product);
	};

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<div className='name'>{name}</div>
			<div className='quantity'>
				<span className='arrow' onClick={decreaseProductQuantity}>
					{'<'}
				</span>
				<span className='value'>{quantity}</span>
				<span className='arrow' onClick={increaseProductQuantity}>
					{'>'}
				</span>
			</div>
			<div className='price'>{price}</div>
			<div className='remove-button' onClick={() => handleDelete(cartItem)}>
				X
			</div>
		</div>
	);
};

export default CheckoutItem;
