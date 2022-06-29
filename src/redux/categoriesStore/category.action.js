import { CATEGORIES_ACTIONS } from './category.types';
import { COLLECTIONS_ENUM } from '../../utils/firebase/collections.enum';
import { createAction } from '../../utils/reducer/reducer.utils';
import { getCollectionAndDocuments } from '../../utils/firebase/firebase';

export const setCategories = (categoriesArray) =>
	createAction(CATEGORIES_ACTIONS.SET_CATEGORIES, categoriesArray);

export const setDirectories = (directories) =>
	createAction(CATEGORIES_ACTIONS.SET_DIRECTORIES, directories);

export const fetchCatgoriesStart = () => createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_START);

export const fetchCatgoriesSuccess = (categoriesArray) =>
	createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCatgoriesError = (error) =>
	createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_ERROR, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
	dispatch(fetchCatgoriesStart());

	try {
		const categoriesArray = await getCollectionAndDocuments(COLLECTIONS_ENUM.CATEGORIES);
		dispatch(fetchCatgoriesSuccess(categoriesArray));
	} catch (error) {
		dispatch(fetchCatgoriesError(error));
	}
};
