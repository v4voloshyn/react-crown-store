import { createContext, useEffect, useState } from 'react';

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
	cartItemsCount: 0,
});

export const CartProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartItemsCount, setCartItemsCount] = useState(0);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	useEffect(() => {
		const newCartItemsCount = cartItems.reduce((acc, item) => (acc += item.quantity), 0);
		setCartItemsCount(newCartItemsCount);
	}, [cartItems]);

	const value = {
		isCartOpen: isOpen,
		setIsCartOpen: setIsOpen,
		cartItems,
		addItemToCart,
		cartItemsCount,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
