import { categoriesReducer } from './categoriesStore/category.reducer';
import { combineReducers } from 'redux';
import { userReducer } from './userStore/user.reducer';

export const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
});
