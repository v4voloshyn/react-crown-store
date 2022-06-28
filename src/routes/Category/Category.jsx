import './Category.scss';

import { useEffect, useState } from 'react';

import ProductCard from '../../components/ProductCard/ProductCard';
import { selectCategoriesMap } from '../../redux/categoriesStore/category.selector';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Category = () => {
	const { category } = useParams();
	const categoriesMap = useSelector(selectCategoriesMap);
	const [products, setProducts] = useState(categoriesMap[category]);

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
