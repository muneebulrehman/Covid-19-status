import React, { useEffect, useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import HeadCard from '../HeadCard';
import Header from '../../Header';
import { fetchCovidDataCountry } from '../../../redux/covid-data/covidData';
import InofCard from './InfoCard';
import style from '../../styling/CountryCard.module.css';

const CountryCard = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { data } = state;
  useEffect(() => {
    dispatch(fetchCovidDataCountry(data.name));
  }, []);
  const covidData = useSelector(({ covidReducer }) => covidReducer.country);
  // console.log(covidData);
  const arr = [
    { 'Total Cases Recorded': covidData.today_confirmed },
    { 'Total Deaths recorded': covidData.today_deaths },
    { 'New cases For Today': covidData.today_new_confirmed },
    { 'New Deaths For Today': covidData.today_new_deaths },
    { 'Open Cases': covidData.today_open_cases },
    { 'Total Recovered Cases': covidData.today_recovered }
  ];
  console.log(arr);
  return (
    <>
      <Header message={data.name}></Header>
      <HeadCard name={data.code} homeCard={false} flag={data.flag} fName={data.name} />
      <div className={style.allCards}>
        {arr.map((el, i) => (
          <InofCard data={el} key={useId()} even={i % 2 === 0 ? true : false} />
        ))}
      </div>
    </>
  );
};

export default CountryCard;
