import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.js';

import { UserContext } from '../../context/UserContext';
import { CartContext } from '../../context/CartContext';

import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';

import logo from '../../assets/crown.svg';

import './Navigation.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<>
			<div className='navigation'>
				<Link to='/' className='logo-container'>
					<img src={logo} alt='Logo' />
				</Link>
				<div className='nav-links-container'>
					<Link to='shop' className='nav-link'>
						Shop
					</Link>
					{currentUser ? (
						<span className='nav-link' onClick={signOutUser}>
							Sign Out
						</span>
					) : (
						<Link to='auth' className='nav-link'>
							Sign In
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
