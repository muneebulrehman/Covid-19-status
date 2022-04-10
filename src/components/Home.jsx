import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import Header from './Header';
import style from './styling/Home.module.css';

const Home = () => {
  const AllData = useSelector(({ countryReducer }) => countryReducer);
  // console.log(AllData);
  const region = ['Africa', 'Americas', 'Antarctic', 'Asia', 'Europe', 'Oceania'];

  return (
    <div>
      <Header />
      <div className={style.allCards}>
        {region.map((el, i) => (
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
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
