import { CATEGORIES_ACTIONS } from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCategoriesMap = (categories) =>
	createAction(CATEGORIES_ACTIONS.SET_CATEGORIES, categories);

export const setDirectories = (directories) =>
	createAction(CATEGORIES_ACTIONS.SET_DIRECTORIES, directories);
