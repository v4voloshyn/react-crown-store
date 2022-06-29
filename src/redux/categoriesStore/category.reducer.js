import { CATEGORIES_ACTIONS } from './category.types';

const INITIAL_STATE = {
	categories: [],
	directories: [],
	isLoading: false,
	error: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case CATEGORIES_ACTIONS.FETCH_CATEGORIES_START:
			return { ...state, isLoading: true };

		case CATEGORIES_ACTIONS.FETCH_CATEGORIES_SUCCESS:
			return { ...state, categories: payload, isLoading: false };

		case CATEGORIES_ACTIONS.FETCH_CATEGORIES_ERROR:
			return { ...state, error: payload, isLoading: false };

		case CATEGORIES_ACTIONS.SET_DIRECTORIES:
			return { ...state, directories: payload };

		default:
			return state;
	}
};
