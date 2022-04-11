import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCountries } from './redux/countries/countries';
import { fetchCovidData } from './redux/covid-data/covidData';
import Home from './components/Home';
import CountryCard from './components/view/country/CountryCard';

import AllCards from './components/view/region/RegionCards';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchCovidData());
  }, []);

  const setHeaderMessage = (dis) => {
    setMessage(dis);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/:id`} element={<AllCards />} />
          <Route path={`/:id/:name`} element={<CountryCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
