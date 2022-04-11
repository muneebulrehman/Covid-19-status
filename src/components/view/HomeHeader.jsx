import React from 'react';
import { useSelector } from 'react-redux';
import style from '../styling/HomeHeader.module.css';

const HomeHeader = () => {
  const date = new Date();
  const today = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
    date.getDate()
  ).padStart(2, '0')}`;
  const data = useSelector(({ covidReducer }) => covidReducer.allData);
  if (data) {
    return (
      <div className={style.homeHeader}>
        <div className={style.imgContainer}>
          <h3>{today}</h3>
          <p>STATS</p>
        </div>
        <div className={style.headerInfo}>
          <h3 className={style.heading}>TOTAL STATS</h3>
          <div className={style.headerData}>
            <p>
              Total Confirmed <br /> {data.today_confirmed}
            </p>
            <p>
              Total Deaths <br /> {data.today_deaths}
            </p>
            <p>
              Total cases for Today <br /> {data.today_new_confirmed}
            </p>
            <p>
              Total deaths for Today <br /> {data.today_new_deaths}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return <h2>No data found</h2>;
};

export default HomeHeader;
