import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';
import { signOutUser } from '../../utils/firebase/firebase.js';

import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';

import logo from '../../assets/crown.svg';

import './Navigation.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);

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
					<Link to='/'>
						<CartIcon />
					</Link>
				</div>
				<CartDropdown />
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
