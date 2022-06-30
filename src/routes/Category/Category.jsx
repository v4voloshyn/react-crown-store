import './Category.scss';

import {
	selectCategoriesMap,
	selectIsCategoriesLoading,
} from '../../redux/categoriesStore/category.selector';
import { useEffect, useState } from 'react';

import ProductCard from '../../components/ProductCard/ProductCard';
import Spinner from '../../components/Spinner/Spinner';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Category = () => {
	const { category } = useParams();
	const categoriesMap = useSelector(selectCategoriesMap);
	const [products, setProducts] = useState(categoriesMap[category]);

	const isLoading = useSelector(selectIsCategoriesLoading);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [categoriesMap, category]);

	return (
		<>
			<h2 className='category-title'>{category}</h2>
			<div className='category-container'>
				{isLoading ? (
					<Spinner />
				) : (
					products && products.map((product) => <ProductCard key={product.id} {...product} />)
				)}
			</div>
		</>
	);
};

export default Category;
