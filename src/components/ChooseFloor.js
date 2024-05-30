// src/components/ChooseFloor.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import floorPlanImage from '../images/floor-plan.svg';
import './ChooseFloor.css';

const ChooseFloor = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/detailed-analysis');
  };

  return (
    <div className="choose-floor">
      <div className="choose-floor-content">
        <h2 className="title">Plan scanné</h2>
        <p className="subtitle">Choisissez un étage</p>
        <img src={floorPlanImage} alt="Floor Plan" className="floor-plan-image" />
        <div className="floor-select">
          <label className="floor-label">Étage actuel</label>
          <button className="floor-button">Choisir un étage</button>
        </div>
      </div>
      <button className="next-button" onClick={handleNextClick}>SUIVANT</button>
    </div>
  );
};

export default ChooseFloor;
