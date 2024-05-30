// src/components/ValidateButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ValidateButton.css';

const ValidateButton = () => {
  const navigate = useNavigate();

  const handleValidateClick = () => {
    navigate('/detailed-analysis');
  };

  return (
    <button className="validate-button" onClick={handleValidateClick}>
      VALIDER
    </button>
  );
};

export default ValidateButton;
