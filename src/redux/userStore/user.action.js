import { USER_ACTIONS } from './user.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCurrentUser = (user) => createAction(USER_ACTIONS.SET_CURRENT_USER, user);

export const checkUserSession = () => createAction(USER_ACTIONS.CHECK_USER_SESSION);

export const googleSignInStart = () => createAction(USER_ACTIONS.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
	createAction(USER_ACTIONS.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) => createAction(USER_ACTIONS.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) => createAction(USER_ACTIONS.SIGN_IN_FAILED, error);
