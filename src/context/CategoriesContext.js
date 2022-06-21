import { createContext, useEffect, useState } from 'react';

import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase';

import SHOP_DATA from '../shopDB';

export const CategoriesContext = createContext({
	categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	useEffect(() => {
		// addCollectionAndDocuments('categories', SHOP_DATA);
		const getCategories = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			console.log(categoryMap);
			setCategoriesMap(categoryMap);
		};

		getCategories();
	}, []);

	const value = {
		categoriesMap,
	};

	return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
