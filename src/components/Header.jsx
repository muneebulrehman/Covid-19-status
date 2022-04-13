import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styling/header.css';
import { GrHomeRounded } from 'react-icons/gr';

const Header = ({ message }) => {
  const navigate = useNavigate();
  return (
    <div className="headBar">
      <GrHomeRounded title="Home" className="back-arrow" onClick={() => navigate('/', { replace: true })} />
      <h3>{message}</h3>
    </div>
  );
};

export default Header;
