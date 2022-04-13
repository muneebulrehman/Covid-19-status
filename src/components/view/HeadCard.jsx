import React, { useRef, useEffect } from 'react';
import style from '../styling/HeadCard.module.css';

const HeadCard = ({
  name, homeCard, count, flag, fName
}) => {
  const word = homeCard ? 'BY' : 'OF';
  let newname = name.toLowerCase();
  if (newname === 'americas') newname = 'america';
  if (newname === 'antarctic') newname = 'antarctica';
  const map = useRef();
  const getMap = async () => {
    const response = await fetch(
      `https://raw.githubusercontent.com/muneebulrehman/worldMaps/main/maps/${newname}/vector.svg`
    );
    const data = await response.text();
    if (data) map.current.innerHTML = data;
  };
  useEffect(() => {
    getMap();
  });

  return (
    <>
      <div className={style.card}>
        {!homeCard && (
          <div className={style.flag}>
            <img src={flag} alt={`${name} flag`} />
          </div>
        )}
        <div ref={map} className={style.cardMap}>
          <span>No map data</span>
        </div>
        <div className={style.info}>
          <h3>{homeCard ? name.toUpperCase() : fName.toUpperCase()}</h3>
          {homeCard && (
          <p>
            {count}
            {' '}
            Countries
          </p>
          )}
        </div>
      </div>
      <div className={style.message}>
        <h3>
          STATS
          {' '}
          {word}
          {' '}
          COUNTRY
        </h3>
      </div>
    </>
  );
};

export default HeadCard;
