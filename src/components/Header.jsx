import React from 'react';
import './styling/header.css';

const Header = ({ message }) => (
  <div className="headBar">
    <h3>{message}</h3>
  </div>
);

export default Header;
