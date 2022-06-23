import { CATEGORIES_ACTIONS } from './category.types';

const INITIAL_STATE = {
	categoriesMap: {},
	directories: [],
};

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case CATEGORIES_ACTIONS.SET_CATEGORIES:
			return { ...state, categoriesMap: payload };
		case CATEGORIES_ACTIONS.SET_DIRECTORIES:
			return { ...state, directories: payload };
		default:
			return state;
	}
};
