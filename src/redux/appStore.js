import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import createSagaMiddleware from '@redux-saga/core';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
import { rootSaga } from './sagas/root-saga';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [process.env.NODE_ENV === 'development' && logger, sagaMiddleware].filter(
	Boolean
);

const composeEnhancer =
	(process.env.NODE_ENV === 'development' &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const appStore = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(appStore);
