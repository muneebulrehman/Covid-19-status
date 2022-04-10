const ALL_COVID_DATA = 'covidStats/covid-data/COVID_DATA';
const COUNTRY_DATA = 'covidStats/covid-data/COUNTRY_DATA';

const url = 'https://api.covid19tracking.narrativa.com/api/';

const initialState = {
  allData: {},
  country: {}
};

const covidData = (payload) => {
  return {
    type: ALL_COVID_DATA,
    payload
  };
};

const countryData = (payload) => {
  return {
    type: COUNTRY_DATA,
    payload
  };
};

export const fetchCovidData = (payload) => async (dispatch) => {
  const response = await fetch(`${url}/${payload.date}/country/c`);
  const data = await response.json();
  dispatch(covidData(data.total));
};

export const fetchCovidDataCountry = (payload) => async (dispatch) => {
  const today = payload.date;
  const response = await fetch(`${url}/${payload.date}/country/${payload.country}`);
  const data = await response.json();
  dispatch(countryData(data.dates[today].countries[payload.country]));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_COVID_DATA: {
      return { ...state, allData: { ...action.payload } };
    }
    case COUNTRY_DATA: {
      return { ...state, country: { ...action.payload } };
    }
    default:
      return state;
  }
};

export default reducer;
