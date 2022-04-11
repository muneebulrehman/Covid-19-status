import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../../styling/DataCard.module.css';
import { BsArrowRightCircle } from 'react-icons/bs';

const DataCard = ({ data, classname }) => {
  // console.log(classname);
  const navigate = useNavigate();
  const code = data.code.toLowerCase();
  const map = useRef();
  const getMap = async () => {
    const response = await fetch(
      `https://raw.githubusercontent.com/muneebulrehman/worldMaps/main/maps/${code}/vector.svg`
    );
    const data = await response.text();
    map.current.innerHTML = data;
  };
  useEffect(() => {
    getMap();
  });

  return (
    <div
      className={[style.card, classname ? style.light : style.dark].join(' ')}
      onClick={() =>
        navigate(`/${data.region.toLowerCase()}/${data.name.toLowerCase()}`, { state: { data } })
      }>
      <div ref={map}>
        <span>No map data</span>
      </div>
      <div className={style.info}>
        <h3>{data.name.toUpperCase()}</h3>
        <BsArrowRightCircle className={style.icon} />
      </div>
    </div>
  );
};

export default DataCard;
