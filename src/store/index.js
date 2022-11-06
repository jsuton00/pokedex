import { applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

const composeEnhancers =
	process.env.NODE_ENV === 'development'
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null || compose;

const initialState = {};

const store = configureStore(
	{ reducer: rootReducer },
	initialState,
	composeEnhancers(applyMiddleware(thunk)),
);

export default store;
