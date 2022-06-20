import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import './CheckoutItem.scss';

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
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<div className='name'>{name}</div>
			<div className='quantity'>
				<span className='arrow' onClick={handleRemove}>
					&#10094;
				</span>
				<span className='value'>{quantity}</span>
				<span className='arrow' onClick={increaseProductQuantity}>
					&#10095;
				</span>
			</div>
			<div className='price'>${price}</div>
			<div className='remove-button' onClick={handleDelete}>
				&times;
			</div>
		</div>
	);
};

export default CheckoutItem;
