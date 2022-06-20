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

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	deleteItemFromCart: () => {},
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

	const deleteItemFromCart = (productToDelete) => {
		const confirmation = window.confirm(`Remove ${productToDelete.name} from cart?`);
		if (confirmation) {
			const filteredCartItems = cartItems.filter((item) => item.id !== productToDelete.id);
			setCartItems(filteredCartItems);
		}
	};

	const decreaseQuantity = (product) => {
		if (product.quantity <= 1) {
			deleteItemFromCart(product);
		} else {
			const lessItems = cartItems.map((item) =>
				item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
			);
			setCartItems(lessItems);
		}
	};

	useEffect(() => {
		const newCartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
		const newCartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
		setCartItemsCount(newCartItemsCount);
		setCartTotal(newCartTotal);
	}, [cartItems]);

	const value = {
		isCartOpen: isOpen,
		setIsCartOpen: setIsOpen,
		cartItems,
		addItemToCart,
		cartItemsCount,
		cartTotal,
		decreaseQuantity,
		deleteItemFromCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
