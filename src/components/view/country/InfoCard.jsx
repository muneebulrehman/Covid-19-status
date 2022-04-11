import React from 'react';
import style from '../../styling/InfoCard.module.css';

const InfoCard = ({ data, even }) => {
  const key = Object.keys(data)[0];
  const value = Object.values(data)[0];
  console.log(value);
  console.log(key);

  return (
    <div className={[even ? style.even : style.odd, style.card].join(' ')}>
      <h3>{key}</h3>
      <p>{value}</p>
    </div>
  );
};

export default InfoCard;
