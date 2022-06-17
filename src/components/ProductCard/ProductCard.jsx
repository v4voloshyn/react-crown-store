import React from 'react';

import CustomButton from '../UI/Buttons/CustomButton';

import './ProductCard.scss';

const ProductCard = ({ name, price, imageUrl }) => {
	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={`${name}`} />
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton buttonType='inverted'>Add to cart</CustomButton>
		</div>
	);
};

export default ProductCard;
