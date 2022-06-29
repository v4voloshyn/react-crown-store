import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
import storage from 'redux-persist/lib/storage';

const loggerMiddleware = (state) => (next) => (action) => {
	if (!action.type) {
		return next(action);
	}

	console.log('action.Type', action.type);
	console.log('action.Payload', action.payload);
	console.log('currentState', state.getState());

	next(action);

	console.log('newState', state.getState());
};

const middlewares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middlewares));

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const appStore = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(appStore);
