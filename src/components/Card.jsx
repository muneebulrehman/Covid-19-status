import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styling/card.css';
import { BsArrowRightCircle } from 'react-icons/bs';

const Card = ({
  name, homeCard, even, allData
}) => {
  const navigate = useNavigate();
  const count = allData.length;
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
  /* eslint-disable */
  return (
    <div
      data-testid={newname}
      className={`${homeCard ? 'homeCard' : 'card'} ${homeCard && even ? 'dark' : 'light'}`}
      onClick={() => {
        navigate(`/${name}`, {
          state: {
            name, allData, count, newname
          }
        });
      }}
    >
      <div ref={map} className="cardMap">
        <span>No map data</span>
      </div>
      <div>
        <h3>{name.toUpperCase()}</h3>
        {homeCard && (
        <p>
          {count && count}
          {' '}
          Countries
        </p>
        )}
      </div>
      <BsArrowRightCircle className="arrow-right" />
    </div>
  );
};

export default Card;
