import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<>
			<h1>Page not Found</h1>
			<h2>
				Go to <Link to='/'>main page</Link>
			</h2>
		</>
	);
};

export default NotFound;
