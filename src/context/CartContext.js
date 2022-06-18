import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
	const existItem = cartItems.find((item) => productToAdd.id === item.id);
	if (existItem) {
		return cartItems.map((item) =>
			productToAdd.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
		);
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const value = {
		isCartOpen: isOpen,
		setIsCartOpen: setIsOpen,
		cartItems,
		addItemToCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
