import React, { useRef } from 'react';
import style from './styling/Card.module.css';

const Card = ({ name }) => {
  const map = useRef('');
  const getMap = async () => {
    const response = await fetch(
      `https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/${name}/vector.svg`
    );
    const data = await response.text();
    map.current.innerHTML = data;
  };
  getMap();
  return (
    <div>
      <div ref={map} className={style.cardMap}></div>
      <h2>This is card</h2>
    </div>
  );
};

export default Card;
