import { createContext, useEffect, useState } from 'react';
import { fetchShopData } from '../services/fetchShopData1';

export const ProductsContext = createContext({
	products: [],
	isDropdownVisible: true,
});

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [isCartDropDownVisible, setCartDropdownVisible] = useState(false);

	const value = {
		products,
		isDropdownVisible: isCartDropDownVisible,
		setCartDropdownVisible,
	};

	useEffect(() => {
		fetchShopData().then((data) => setProducts(data));
	}, []);

	return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
