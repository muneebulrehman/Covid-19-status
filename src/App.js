import { useEffect } from 'react';
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

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/region/:id" element={<AllCards />} />
          <Route path="/region/:id/country/:name" element={<CountryCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
