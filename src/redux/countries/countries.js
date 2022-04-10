const ADD_COUNTRIES = 'covidStats/Countries/ADD_COUNTRIES';

const url = 'https://restcountries.com/v3.1/all';

const initialState = [];

const add_Countries = () => {
  return {
    type: ADD_COUNTRIES
  };
};

export const fetchCountries = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRIES: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default reducer;
