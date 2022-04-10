import { createStore, applyMiddleware, combineReducers } from 'redux';
import countryReducer from './countries/countries';

const store = createStore(countryReducer);

export default store;
