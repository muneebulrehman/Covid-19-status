import React from 'react';
import { useLocation } from 'react-router-dom';
import DataCard from './DataCard';
import style from '../../styling/RegionCards.module.css';
import Header from '../../Header';
import HeadCard from '../HeadCard';

const AllCards = () => {
  const counter = 1;
  let bool = null;
  const setClass = (num) => {
    num += counter;
    switch (true) {
      case bool === true && num % 2 === 0: {
        bool = true;
        return false;
      }
      case bool === true && num % 2 !== 0: {
        bool = false;
        return false;
      }
      case bool === false && num % 2 === 0: {
        bool = false;
        return true;
      }
      default: {
        bool = true;
        return true;
      }
    }
  };
  const data = useLocation();
  const { name, allData, count } = data.state;

  return (
    <div className={style.mainCard}>
      <Header message={name.toUpperCase()} />
      <HeadCard name={name} count={count} homeCard />
      <div className={style.allCards}>
        {allData.map((data, i) => (
          <DataCard
            data={data}
            key={data.code}
            classnameBg={setClass(i)}
            // eslint-disable-next-line no-constant-condition
            classnameSm={true ? i % 2 === 0 : false}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCards;
