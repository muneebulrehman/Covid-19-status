import store from '../redux/configureStore';
import { addCountries } from '../redux/countries/countries';
import { covidData } from '../redux/covid-data/covidData';

const countries = [
  {
    name: {
      common: 'Montenegro',
      official: 'Montenegro'
    },
    cca2: 'ME',
    region: 'Europe',
    subregion: '',
    flags: { svg: '' }
  },
  {
    name: {
      common: 'Tokelau',
      official: 'Tokelau'
    },
    cca2: 'TK',
    region: 'Oceania',
    subregion: '',
    flags: { svg: '' }
  },
  {
    name: {
      common: 'Cuba',
      official: 'Republic of Cuba'
    },
    cca2: 'CU',
    region: 'Americas',
    subregion: '',
    flags: { svg: '' }
  },
  {
    name: {
      common: 'Guadeloupe',
      official: 'Guadeloupe'
    },
    cca2: 'GP',
    region: 'Americas',
    subregion: '',
    flags: { svg: '' }
  }
];

describe('Testing for the add countries action', () => {
  it('Testing for countries passed', () => {
    store.dispatch(addCountries([1, 3, 4, 6]));
    expect(store.getState().countryReducer.length).toBe(4);
  });
  it('Testing for countries passed', () => {
    store.dispatch(addCountries([7, 8, 9]));
    expect(store.getState().countryReducer.length).toBe(7);
  });
});

describe('Testing for the add countries action', () => {
  it('Testing for countries passed', () => {
    store.dispatch(covidData({ a: 1, b: 2, c: 3 }));
    expect(store.getState().covidReducer.allData.a).toBe(1);
  });
  it('Testing for countries passed', () => {
    store.dispatch(covidData({ x: 10, y: 20, z: 30 }));
    expect(store.getState().covidReducer.allData.y).toBe(20);
  });
});
