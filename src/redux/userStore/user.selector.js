import { createSelector } from 'reselect';

const selectCurrentUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
	[selectCurrentUserReducer],
	(user) => user.currentUser
);
