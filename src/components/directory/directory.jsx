import { useEffect, useState } from 'react';

import { fetchData } from '../../services/fetchCategoriesData';

import CategoryItem from '../CategoryItem/CategoryItem';

import './Directory.scss';

const Directory = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetchData().then((res) => {
			setCategories(res);
		});
	}, []);

	console.log(categories);

	return (
		<div className='categories-container'>
			{categories.map((category) => (
				<CategoryItem key={category.id} {...category} />
			))}
		</div>
	);
};

export default Directory;
