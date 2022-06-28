import { CART_ACTIONS } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setIsCartOpen = (boolean) => createAction(CART_ACTIONS.SET_IS_CART_OPEN, boolean);

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

	return confirmation ? cartItems.filter((item) => item.id !== cartItemToDelete.id) : cartItems;
};

export const addItemToCart = (cartItems, productToAdd) => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return createAction(CART_ACTIONS.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const newCartItems = removeCartItem(cartItems, cartItemToRemove);
	return createAction(CART_ACTIONS.SET_CART_ITEMS, newCartItems);
};

export const deleteProductFromCart = (cartItems, cartItemToDelete) => {
	const newCartItems = deleteCartItem(cartItems, cartItemToDelete);
	return createAction(CART_ACTIONS.SET_CART_ITEMS, newCartItems);
};
