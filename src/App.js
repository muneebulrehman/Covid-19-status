import { useEffect } from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCountries } from './redux/countries/countries';
import { fetchCovidDataCountry, fetchCovidData } from './redux/covid-data/covidData';
import Home from './components/Home';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchCovidData());
  }, []);
  return (
    <>
      <Home />
    </>
  );
};

export default App;
