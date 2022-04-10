import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import countryReducer from './countries/countries';

const store = createStore(countryReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
