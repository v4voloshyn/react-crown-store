export const loggerMiddleware = (state) => (next) => (action) => {
	if (!action.type) {
		return next(action);
	}

	console.log('action.Type', action.type);
	console.log('action.Payload', action.payload);
	console.log('currentState', state.getState());

	next(action);

	console.log('newState', state.getState());
};
