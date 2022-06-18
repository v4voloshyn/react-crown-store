import { createContext, useState } from 'react';

export const CartContext = createContext({
	isDropdownVisible: true,
});

export const CartProvider = ({ children }) => {
	const [isCartDropDownVisible, setCartDropdownVisible] = useState(false);

	const value = {
		isDropdownVisible: isCartDropDownVisible,
		setCartDropdownVisible,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
