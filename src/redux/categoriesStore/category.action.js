import { CATEGORIES_ACTIONS } from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';

// CATEGORIES ACTIONS
export const fetchCatgoriesStart = () => createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_START);

export const fetchCatgoriesSuccess = (categoriesArray) =>
	createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCatgoriesError = (error) =>
	createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_ERROR, error);

// DIRECTORY ACTIONS
export const setDirectories = (directories) =>
	createAction(CATEGORIES_ACTIONS.SET_DIRECTORIES, directories);
