import React from 'react';
import './styling/Loader.css';

const Loader = () => (
  <div className="fullSpinner">
    <div className="spinner">
      <div className="loader l1" />
      <div className="loader l2" />
    </div>
  </div>
);

export default Loader;
