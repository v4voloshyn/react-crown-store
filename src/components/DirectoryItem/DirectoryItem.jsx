import React from 'react';

import './DirectoryItem.scss';

function DirectoryItem({ title, imageUrl }) {
	return (
		<div className='directory-item-container'>
			<div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
			<div className='directory-body'>
				<h2>{title.toUpperCase()}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
}

export default DirectoryItem;
