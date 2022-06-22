import React from 'react';
import { Outlet } from 'react-router-dom';
import Directory from '../../components/Directory/Directory.jsx';

const Home = () => {
	return (
		<div className=''>
			<Directory />
			<Outlet />
		</div>
	);
};

export default Home;
