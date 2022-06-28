import './ProductCard.scss';

import CustomButton, { BUTTON_CLASSES } from '../UI/Buttons/CustomButton';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../redux/cartStore/cart.action';
import { selectCartItems } from '../../redux/cartStore/cart.selector';

const ProductCard = (product) => {
	const { name, price, imageUrl } = product;

	const dispatch = useDispatch();

	const cartItems = useSelector(selectCartItems);

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
