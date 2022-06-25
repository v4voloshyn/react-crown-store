import { applyMiddleware, compose, createStore } from 'redux';

import logger from 'redux-logger';
import { rootReducer } from './rootReducer';

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

export const appStore = createStore(rootReducer, undefined, composedEnhancers);
