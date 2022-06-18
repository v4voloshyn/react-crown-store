import { createContext, useState } from 'react';

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const value = {
		isCartOpen: isOpen,
		setIsCartOpen: setIsOpen,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
