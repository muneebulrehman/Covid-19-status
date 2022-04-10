import { useEffect } from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCountries } from './redux/countries/countries';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchCountries()), []);
  return (
    <>
      <h1>Hello from the react</h1>
    </>
  );
};

export default App;
