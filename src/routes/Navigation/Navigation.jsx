import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import './Navigation.scss';
import logo from '../../assets/crown.svg';

const Navigation = () => {
	return (
		<>
			<div className='navigation'>
				<Link to='/' className='logo-container'>
					<img src={logo} alt='Logo' />
				</Link>
				<div className='nav-links-container'>
					<Link to='/shop' className='nav-link'>
						Shop
					</Link>
					<Link to='/men' className='nav-link'>
						Men
					</Link>
					<Link to='/women' className='nav-link'>
						Women
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
