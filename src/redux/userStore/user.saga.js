import { all, call, put, takeLatest } from 'redux-saga/effects';
import { createUserDocumentFromAuth, getCurrentUser } from '../../utils/firebase/firebase';
import { signInFailed, signInSuccess } from './user.action';

import { USER_ACTIONS } from './user.types';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
	try {
		const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
		console.log(userSnapshot.data());
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield call(getCurrentUser);
		if (!userAuth) return;

		yield call(getSnapshotFromUserAuth, userAuth);
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* onCheckUserSession() {
	yield takeLatest(USER_ACTIONS.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSaga() {
	yield all([call(onCheckUserSession)]);
}
