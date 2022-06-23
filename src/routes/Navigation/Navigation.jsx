import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signOutUser } from '../../utils/firebase/firebase.js';

import { UserContext } from '../../context/UserContext';
import { CartContext } from '../../context/CartContext';

import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { NavContainer, NavLinks, NavLink, LogoContainer } from './Navigation.styles';
import { selectCurrentUser } from '../../redux/userStore/user.selector';

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);

	const { isCartOpen } = useContext(CartContext);

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
