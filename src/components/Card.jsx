import React, { useRef } from 'react';
import './styling/card.css';

const Card = ({ name, homeCard, even, count }) => {
  name = name.toLowerCase();
  if (name === 'americas') name = 'america';
  if (name === 'antarctic') name = 'antarctica';
  const map = useRef();
  const getMap = async () => {
    const response = await fetch(
      `https://raw.githubusercontent.com/muneebulrehman/worldMaps/main/maps/${name}/vector.svg`
    );
    const data = await response.text();
    map.current.innerHTML = data;
  };
  getMap();
  return (
    <div className={`${homeCard ? 'homeCard' : 'card'} ${even ? 'dark' : 'light'}`}>
      <div ref={map} className={'cardMap'}>
        <span>No map data</span>
      </div>
      <div>
        <h3>{name}</h3>
        <p>{count && count} Countries</p>
      </div>
    </div>
  );
};

export default Card;
