import './Shop.scss';

import { Route, Routes } from 'react-router-dom';

import { COLLECTIONS_ENUM } from '../../utils/firebase/collections.enum';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../Category/Category';
import { getCollectionAndDocuments } from '../../utils/firebase/firebase';
import { setCategories } from '../../redux/categoriesStore/category.action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// addCollectionAndDocuments('categories', SHOP_DATA);
		const getCategories = async () => {
			const categories = await getCollectionAndDocuments(COLLECTIONS_ENUM.CATEGORIES);
			dispatch(setCategories(categories));
		};

		getCategories();
	}, [dispatch]);

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
