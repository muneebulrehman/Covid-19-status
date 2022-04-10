import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import Header from './Header';

const Home = () => {
  const AllData = useSelector((countryReducer) => countryReducer);
  const region = ['Africa', 'Americas', 'Antarctic', 'Asia', 'Europe', 'Oceania'];

  return (
    <div>
      <Header />
      <Card name={region[0].toLowerCase()} />
    </div>
  );
};

export default Home;
