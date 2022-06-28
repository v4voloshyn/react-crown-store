import { createSelector } from 'reselect';

const selectCartItemsReducer = (state) => state.cart;

export const selectCartItems = createSelector([selectCartItemsReducer], (cart) => cart.cartItems);

export const selectIsCartOpen = createSelector([selectCartItemsReducer], (cart) => cart.isCartOpen);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((acc, item) => acc + item.quantity, 0)
);
