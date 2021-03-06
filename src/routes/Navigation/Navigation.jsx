import { LogoContainer, NavContainer, NavLink, NavLinks } from './Navigation.styles';

import CartDropdown from '../../components/CartDropdown/CartDropdown';
import CartIcon from '../../components/CartIcon/CartIcon';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Outlet } from 'react-router-dom';
import { selectCurrentUser } from '../../redux/userStore/user.selector';
import { selectIsCartOpen } from '../../redux/cartStore/cart.selector';
import { signOutUser } from '../../utils/firebase/firebase.js';
import { useSelector } from 'react-redux';

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);

	return (
		<>
			<NavContainer>
				<LogoContainer to='/'>
					<Logo />
				</LogoContainer>
				<NavLinks>
					<NavLink to='shop'>Shop</NavLink>
					{currentUser ? (
						<NavLink as='span' onClick={signOutUser}>
							Sign Out
						</NavLink>
					) : (
						<NavLink to='auth'>Sign In</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavContainer>
			<Outlet />
		</>
	);
};

export default Navigation;
