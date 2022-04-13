import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import countryReducer from './countries/countries';
import covidReducer from './covid-data/covidData';

const reducer = combineReducers({ countryReducer, covidReducer });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
