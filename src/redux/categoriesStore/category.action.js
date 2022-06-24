import { CATEGORIES_ACTIONS } from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCategories = (categoriesArray) =>
	createAction(CATEGORIES_ACTIONS.SET_CATEGORIES, categoriesArray);

export const setDirectories = (directories) =>
	createAction(CATEGORIES_ACTIONS.SET_DIRECTORIES, directories);
