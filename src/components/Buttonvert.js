// ButtonVert.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import addIcon from '../images/ajouter.svg'; // Assurez-vous que le chemin est correct

const ButtonVert = () => {
  const navigate = useNavigate();

  return (
    <button className="button-vert" onClick={() => navigate('/building-info-form')}>
      <img src={addIcon} alt="Add" />
    </button>
  );
};

export default ButtonVert;