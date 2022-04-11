import React from 'react';
import { useLocation } from 'react-router-dom';
import DataCard from './DataCard';
import style from '../../styling/RegionCards.module.css';
import Header from '../../Header';
import HeadCard from '../../view/HeadCard';

const AllCards = () => {
  const data = useLocation();
  const { name, allData, count } = data.state;
  // console.log(allData);

  return (
    <div className={style.mainCard}>
      <Header message={name.toUpperCase()} />
      <HeadCard name={name} count={count} homeCard={true} />
      <div className={style.allCards}>
        {allData.map((data) => (
          <DataCard data={data} key={data.code} />
        ))}
      </div>
    </div>
  );
};

export default AllCards;
