import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import style from '../../styling/DataCard.module.css';

const DataCard = ({ data, classnameBg, classnameSm }) => {
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
  /* eslint-disable */
  return (
    <div
      className={[
        style.card,
        classnameBg ? style.light : style.dark,
        classnameSm ? style.lPink : style.dPink
      ].join(' ')}
      onClick={() =>
        navigate(`/region/${data.region.toLowerCase()}/country/${data.name.split(" ").join("").toLowerCase()}`, { state: { data } })
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
