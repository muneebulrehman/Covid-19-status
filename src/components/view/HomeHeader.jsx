import React from 'react';
import { useSelector } from 'react-redux';
import style from '../styling/HomeHeader.module.css';

const HomeHeader = () => {
  const data = useSelector(({ covidReducer }) => covidReducer.allData);
  console.log(data);
  return {
    if(data) {
      <div className={style.homeHeader}>
        <div className={style.imgContainer}></div>
      </div>;
    }
  };
};

export default HomeHeader;
