import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryItem from '../category-item/CategoryItem';

import './Directory.scss';

const fetchData = async () => {
	try {
		const response = await axios.get(`http://localhost:7007/categories`);
		if (response.statusText === 'OK') {
			return response.data;
		}
	} catch (error) {
		throw new Error(error);
	}
};

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
