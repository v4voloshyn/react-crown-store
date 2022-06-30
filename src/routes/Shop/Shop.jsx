import './Shop.scss';

import { Route, Routes } from 'react-router-dom';

import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../Category/Category';
import { fetchCatgoriesStart } from '../../redux/categoriesStore/category.action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// addCollectionAndDocuments('categories', SHOP_DATA);
		dispatch(fetchCatgoriesStart());
	}, []);

	return (
		<>
			<Routes>
				<Route index element={<CategoriesPreview />} />
				<Route path=':category' element={<Category />} />
			</Routes>
		</>
	);
};

export default Shop;
