import React from 'react';
import './styling/Loader.css';

const Loader = () => {
  return (
    <div className="fullSpinner">
      <div className="spinner">
        <div className="loader l1"></div>
        <div className="loader l2"></div>
      </div>
    </div>
  );
};

export default Loader;
