import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

import CustomButton, { BUTTON_CLASSES } from '../UI/Buttons/CustomButton';

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
			<CustomButton buttonType={BUTTON_CLASSES.inverted} onClick={addProductToCart}>
				Add to cart
			</CustomButton>
		</div>
	);
};

export default ProductCard;
