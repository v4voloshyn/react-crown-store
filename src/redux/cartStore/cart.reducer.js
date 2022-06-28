import { CART_ACTIONS } from './cart.types';

const initialState = {
	cartItems: [],
	isCartOpen: false,
};

export const cartReducer = (state = initialState, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case CART_ACTIONS.SET_CART_ITEMS:
			return {
				...state,
				cartItems: payload,
			};
		case CART_ACTIONS.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			};
		default:
			return state;
	}
};
