import { CartDropdownContainer, CartItemsWrapper, EmptyCartMessage } from './CartDropdown.styles';
import { useDispatch, useSelector } from 'react-redux';

import { BUTTON_CLASSES } from '../UI/Buttons/CustomButton';
import CartItem from '../CartItem/CartItem';
import { DefaultButton } from '../UI/Buttons/Buttons.styles';
import { selectCartItems } from '../../redux/cartStore/cart.selector';
import { setIsCartOpen } from '../../redux/cartStore/cart.action';
import { useNavigate } from 'react-router-dom';
import { useOutsideClick } from './../../hooks/useOutsideClick';

const CartDropdown = () => {
	const dispatch = useDispatch();

	const cartItems = useSelector(selectCartItems);

	const navigate = useNavigate();

	const closeCartNodeRef = useOutsideClick(
		() => dispatch(setIsCartOpen(false)),
		document.getElementById('cart')
	);

	const go2CheckoutPage = () => {
		navigate('/checkout');
		dispatch(setIsCartOpen(false));
	};

	return (
		<CartDropdownContainer ref={closeCartNodeRef}>
			<CartItemsWrapper>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
				) : (
					<EmptyCartMessage>The cart is empty</EmptyCartMessage>
				)}
			</CartItemsWrapper>

			{cartItems.length ? (
				<DefaultButton buttonType={BUTTON_CLASSES.base} onClick={go2CheckoutPage}>
					I want it now!
				</DefaultButton>
			) : null}
		</CartDropdownContainer>
	);
};

export default CartDropdown;
