import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import HomeHeader from './view/HomeHeader';
import style from './styling/Home.module.css';
import AllCards from './view/AllCards';

const Home = () => {
  const AllData = useSelector(({ countryReducer }) => countryReducer);
  const regions = ['Africa', 'Americas', 'Antarctic', 'Asia', 'Europe', 'Oceania'];

  return (
    <div>
      <HomeHeader />
      <div className={style.allCards}>
        {regions.map((el, i) => (
          <Card
            key={el}
            name={el.toLowerCase()}
            homeCard={true}
            even={i % 2 === 0 ? true : false}
            count={
              AllData.length > 0 &&
              AllData.reduce((acc, cur) => {
                if (cur.region === el) acc += 1;
                return acc;
              }, 0)
            }
            // onClick={() => <AllCards data={AllData.filter((item) => item.region == el)} />}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
