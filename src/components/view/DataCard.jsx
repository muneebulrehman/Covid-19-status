import React, { useRef } from 'react';

const DataCard = (name) => {
  const map = useRef();
  const getMap = async () => {
    if (name !== null) {
      const response = await fetch(
        `https://raw.githubusercontent.com/muneebulrehman/worldMaps/main/maps/${name}/vector.svg`
      );
      const data = await response.text();
      map.current.innerHTML = data;
    }
  };
  getMap();
  return (
    <>
      <div ref={map} className={'cardMap'}>
        <span>No map data</span>
      </div>
      <div>
        <h3>{name.toUpperCase()}</h3>
        {homeCard && <p>{count && count} Countries</p>}
      </div>
    </>
  );
};

export default DataCard;
