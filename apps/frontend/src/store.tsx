import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/combineReducer'
const initialState = {}
const composeEnhancer = window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;