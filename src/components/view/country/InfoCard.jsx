import React from 'react';
import style from '../../styling/InfoCard.module.css';

const InfoCard = ({ data, even, smallSc }) => {
  const key = Object.keys(data)[0];
  const value = Object.values(data)[0];

  /* eslint-disable */
  return (
    <div
      className={[
        even ? style.even : style.odd,
        style.card,
        smallSc ? style.lPink : style.dPink
      ].join(' ')}
    >
      <h3>{key}</h3>
      <p>
        {value ? value : 'No data avaiable yet'}
      </p>
    </div>
  );
};

export default InfoCard;
