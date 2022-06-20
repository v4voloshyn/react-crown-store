import { createContext, useEffect, useState } from 'react';

import { addCollectionAndDocuments } from '../utils/firebase/firebase';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase';

import SHOP_DATA from '../shopDB';

export const ProductsContext = createContext({
	products: [],
});

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	const value = {
		products,
	};

	useEffect(() => {
		// addCollectionAndDocuments('categories', SHOP_DATA);
		const getCategories = async () => {
			const categoriesMap = await getCategoriesAndDocuments();
			console.log(categoriesMap);
		};

		getCategories();
	}, []);

	return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
