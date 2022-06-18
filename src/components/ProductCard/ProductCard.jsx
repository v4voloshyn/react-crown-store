import React, { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

import CustomButton from '../UI/Buttons/CustomButton';

import './ProductCard.scss';

const ProductCard = (product) => {
	const { name, price, imageUrl } = product;

	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product);

	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={`${name}`} />
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton buttonType='inverted' onClick={addProductToCart}>
				Add to cart
			</CustomButton>
		</div>
	);
};

export default ProductCard;
