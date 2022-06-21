import { useState, useEffect, useContext } from 'react';

import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../context/CategoriesContext';

import ProductCard from '../../components/ProductCard/ProductCard';

import './Category.scss';

const Category = () => {
	const [products, setProducts] = useState([]);
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [categoriesMap, category]);

	return (
		<>
			<h2 className='category-title'>{category}</h2>
			<div className='category-container'>
				{products && products.map((product) => <ProductCard key={product.id} {...product} />)}
			</div>
		</>
	);
};

export default Category;
