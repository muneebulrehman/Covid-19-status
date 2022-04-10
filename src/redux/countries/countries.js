const ADD_COUNTRIES = 'covidStats/Countries/ADD_COUNTRIES';

const url = 'https://restcountries.com/v3.1/all';

const initialState = [];

const addCountries = (payload) => {
  return {
    type: ADD_COUNTRIES,
    payload
  };
};

export const fetchCountries = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  const neededData = data.map((el) => {
    return {
      name: el.name.common,
      code: el.cca2,
      region: el.region,
      continent: el.subregion,
      flag: el.flags.svg
    };
  });
  dispatch(addCountries(neededData));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRIES: {
      return [...state, ...action.payload];
    }
    default:
      return state;
  }
};

export default reducer;
