import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import HomeHeader from './view/HomeHeader';
import style from './styling/Home.module.css';
import Header from './Header';
import Loader from './Loader';

const Home = () => {
  const AllData = useSelector(({ countryReducer }) => countryReducer);
  const regions = ['Africa', 'Americas', 'Antarctic', 'Asia', 'Europe', 'Oceania'];

  return (
    <div>
      {!AllData.length ? (
        <Loader />
      ) : (
        <>
          <Header message="Todays Status" />
          <HomeHeader />
          <div className={style.allCards}>
            {regions.map((el, i) => (
              <Card
                key={el}
                name={el.toLowerCase()}
                homeCard
                even={i % 2 === 0}
                allData={AllData.length > 0 && AllData.filter((data) => data.region === el)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
