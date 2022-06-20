import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
	const existItem = cartItems.find((item) => productToAdd.id === item.id);
	if (existItem) {
		if (existItem.quantity >= 10) return cartItems;
		return cartItems.map((item) =>
			productToAdd.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
		);
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
	if (cartItemToRemove.quantity <= 1) {
		const confirmation = window.confirm(`Remove ${cartItemToRemove.name} from cart?`);
		return confirmation ? cartItems.filter((item) => item.id !== cartItemToRemove.id) : cartItems;
	} else {
		const lessItems = cartItems.map((item) =>
			item.id === cartItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
		);
		return lessItems;
	}
};

const deleteCartItem = (cartItems, cartItemToDelete) => {
	const confirmation = window.confirm(`Remove ${cartItemToDelete.name} from cart?`);
	if (confirmation) {
		return cartItems.filter((item) => item.id !== cartItemToDelete.id);
	}
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	deleteProductFromCart: () => {},
	cartItemsCount: 0,
	cartTotal: 0,
});

export const CartProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartItemsCount, setCartItemsCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const removeItemFromCart = (cartItemToRemove) => {
		setCartItems(removeCartItem(cartItems, cartItemToRemove));
	};

	const deleteProductFromCart = (cartItemToDelete) => {
		setCartItems(deleteCartItem(cartItems, cartItemToDelete));
	};

	useEffect(() => {
		const newCartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
		setCartItemsCount(newCartItemsCount);
	}, [cartItems]);

	useEffect(() => {
		const newCartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
		setCartTotal(newCartTotal);
	}, [cartItems]);

	const value = {
		cartItems,
		isCartOpen: isOpen,
		setIsCartOpen: setIsOpen,
		addItemToCart,
		removeItemFromCart,
		deleteProductFromCart,
		cartItemsCount,
		cartTotal,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
