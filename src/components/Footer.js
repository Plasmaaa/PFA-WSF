import React from 'react';
import { useNavigate } from 'react-router-dom';
import homeIcon from '../images/homeIcon.svg';
import micIcon from '../images/micIcon.svg';
import layersIcon from '../images/layersIcon.svg';

const Footer = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="footer">
      <button className="nav-button" onClick={handleHomeClick}>
        <img src={homeIcon} alt="Home" />
      </button>
      <button className="nav-button">
        <img src={micIcon} alt="Mic" />
      </button>
      <button className="nav-button">
        <img src={layersIcon} alt="Layers" />
      </button>
    </div>
  );
};

export default Footer;
