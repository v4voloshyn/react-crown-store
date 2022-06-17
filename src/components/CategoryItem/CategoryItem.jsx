import React from 'react';
import './CategoryItem.scss';

function CategoryItem({ title, imageUrl }) {
	return (
		<div className='category-container'>
			<div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
			<div className='category-body-container'>
				<h2>{title.toUpperCase()}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
}

export default CategoryItem;