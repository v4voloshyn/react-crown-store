import { CartDropdownContainer, CartItemsWrapper, EmptyCartMessage } from './CartDropdown.styles';

import { BUTTON_CLASSES } from '../UI/Buttons/CustomButton';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { DefaultButton } from '../UI/Buttons/Buttons.styles';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOutsideClick } from './../../hooks/useOutsideClick';

const CartDropdown = () => {
	const { cartItems, setIsCartOpen } = useContext(CartContext);
	const navigate = useNavigate();

	const closeCartNodeRef = useOutsideClick(
		() => setIsCartOpen(false),
		document.getElementById('cart')
	);

	const go2CheckoutPage = () => {
		navigate('/checkout');
		setIsCartOpen(false);
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
