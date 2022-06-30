import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchCatgoriesError, fetchCatgoriesSuccess } from './category.action';

import { CATEGORIES_ACTIONS } from './category.types';
import { COLLECTIONS_ENUM } from '../../utils/firebase/collections.enum';
import { getCollectionAndDocuments } from '../../utils/firebase/firebase';

export function* fetchCategoriesAsync() {
	try {
		const categoriesArray = yield call(getCollectionAndDocuments, COLLECTIONS_ENUM.CATEGORIES);
		yield put(fetchCatgoriesSuccess(categoriesArray));
	} catch (error) {
		yield put(fetchCatgoriesError(error));
	}
}

export function* onFetchCategories() {
	yield takeLatest(CATEGORIES_ACTIONS.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
	yield all([call(onFetchCategories)]);
}
