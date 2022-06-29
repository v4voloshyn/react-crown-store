import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const middlewares = [process.env.NODE_ENV === 'development' && logger, thunk].filter(Boolean);
console.log(middlewares);

const composeEnhancer =
	(process.env.NODE_ENV === 'development' &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const appStore = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(appStore);
