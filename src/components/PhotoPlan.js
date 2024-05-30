// src/components/PhotoPlan.js
import React from 'react';
import cameraIcon from '../images/camera.svg';
import './PhotoPlan.css';
import { useNavigate } from 'react-router-dom';

const PhotoPlan = () => {
  const navigate = useNavigate();

  const handleTakePhoto = () => {
    navigate('/choose-floor');
  };

  return (
    <div className="photo-plan">
      <div className="photo-plan-content">
        <h2 className="greeting">Bonjour René</h2>
        <p className="instructions">Trouvez le plan d'évacuation de votre étage et photographiez-le.</p>
        <div className="camera-button-container">
          <button className="camera-button" onClick={handleTakePhoto}>
            <img src={cameraIcon} alt="Camera" />
          </button>
          <p className="camera-button-text">Prendre en photo</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoPlan;