import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => {
  const roundedProgress = Math.round(progress); // Arrondir le pourcentage à l'entier le plus proche
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${roundedProgress}%` }}>
        {roundedProgress}%
      </div>
    </div>
  );
};

export default ProgressBar;
