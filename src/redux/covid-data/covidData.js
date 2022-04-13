export const ALL_COVID_DATA = 'covidStats/covid-data/COVID_DATA';
const COUNTRY_DATA = 'covidStats/covid-data/COUNTRY_DATA';

const url = 'https://api.covid19tracking.narrativa.com/api/';
const date = new Date();
export const today = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
  2,
  '0'
)}-${String(date.getDate() - 1).padStart(2, '0')}`;

const initialState = {
  allData: {},
  country: {}
};

export const covidData = (payload) => ({
  type: ALL_COVID_DATA,
  payload
});

const countryData = (payload) => ({
  type: COUNTRY_DATA,
  payload
});

export const fetchCovidData = () => async (dispatch) => {
  const response = await fetch(`${url}/${today}/country/c`);
  const data = await response.json();
  dispatch(covidData(data.total));
};

export const fetchCovidDataCountry = (payload) => async (dispatch) => {
  const response = await fetch(`${url}/${today}/country/${payload}`);
  const data = await response.json();
  dispatch(countryData(data.dates[today].countries[payload]));
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
