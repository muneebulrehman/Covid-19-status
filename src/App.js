import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCountries } from './redux/countries/countries';
import { fetchCovidData } from './redux/covid-data/covidData';
import Home from './components/Home';
import Header from './components/Header';

const App = () => {
  const [message, setMessage] = useState('Today Stats');
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
        <Header message={message} />
        <Home />
      </BrowserRouter>
    </>
  );
};

export default App;
