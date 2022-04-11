import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import HeadCard from '../HeadCard';
import Header from '../../Header';

const CountryCard = () => {
  const { state } = useLocation();
  const { data } = state;
  return (
    <>
      <Header message={data.name}></Header>
      <HeadCard name={data.code} homeCard={false} flag={data.flag} fName={data.name} />
    </>
  );
};

export default CountryCard;
