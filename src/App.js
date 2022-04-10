import { useEffect } from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCountries } from './redux/countries/countries';
import { fetchCovidDataCountry, fetchCovidData } from './redux/covid-data/covidData';

const App = () => {
  const obj = {
    country: 'Spain',
    date: '2022-04-10'
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchCovidData(obj));
  }, []);
  return (
    <>
      <h1>Hello from the react</h1>
    </>
  );
};

export default App;
