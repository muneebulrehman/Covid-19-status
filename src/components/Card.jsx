import React, { useRef } from 'react';
import './styling/card.css';
import AllCards from './view/AllCards';

const Card = ({ name, homeCard, even, count }) => {
  let newname = name.toLowerCase();
  if (newname === 'americas') newname = 'america';
  if (newname === 'antarctic') newname = 'antarctica';
  const map = useRef();
  const getMap = async () => {
    const response = await fetch(
      `https://raw.githubusercontent.com/muneebulrehman/worldMaps/main/maps/${newname}/vector.svg`
    );
    const data = await response.text();
    map.current.innerHTML = data;
  };
  getMap();
  return (
    <div
      className={`${homeCard ? 'homeCard' : 'card'} ${homeCard && even ? 'dark' : 'light'}`}
      onClick={() => <AllCards name={name} />}>
      <div ref={map} className={'cardMap'}>
        <span>No map data</span>
      </div>
      <div>
        <h3>{name.toUpperCase()}</h3>
        {homeCard && <p>{count && count} Countries</p>}
      </div>
    </div>
  );
};

export default Card;
