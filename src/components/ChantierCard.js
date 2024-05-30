// src/components/ChantierCard.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChantierContext } from '../context/ChantierContext';
import deleteIcon from '../images/delete.svg';
import editIcon from '../images/edit.svg';
import '../styles.css';

const ChantierCard = ({ image, backgroundImage, title, subtitle, status }) => {
  const { deleteChantier } = useContext(ChantierContext);
  const navigate = useNavigate();

  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const handleDelete = () => {
    deleteChantier(title);
  };

  const handleEdit = () => {
    navigate(`/edit-chantier/${title}`);
  };

  const handleCardClick = () => {
    navigate(`/photo-plan`, { state: { title, subtitle, status } });
  };

  return (
    <div className="chantier-card" style={cardStyle} onClick={handleCardClick}>
      <div className="chantier-overlay"></div>
      <div className="chantier-content">
        <img src={image} alt={`${title} image`} className="chantier-image" />
        <div className="chantier-info">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <p className={`status ${status === 'En cours' ? 'in-progress' : 'completed'}`}>
            {status}
          </p>
        </div>
        <div className="chantier-actions">
          <button className="edit-button" onClick={(e) => { e.stopPropagation(); handleEdit(); }}>
            <img src={editIcon} alt="Edit" />
          </button>
          <button className="delete-button" onClick={(e) => { e.stopPropagation(); handleDelete(); }}>
            <img src={deleteIcon} alt="Delete" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChantierCard;
