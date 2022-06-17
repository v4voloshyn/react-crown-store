import { createContext, useEffect, useState } from 'react';
import { fetchShopData } from '../services/fetchShopData1';

export const ProductsContext = createContext({
	products: [],
});

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	const value = { products };

	useEffect(() => {
		fetchShopData().then((data) => setProducts(data));
	}, []);

	return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
