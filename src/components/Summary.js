// src/components/Summary.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Summary.css';
import room from '../images/Room.svg';
import plaques from '../images/plaques.svg';
import recycle from '../images/recycle.svg';
import prix from '../images/Prix.svg';
import rachat from '../images/rachat.svg';
import people from '../images/People.svg';

const Summary = () => {
  const navigate = useNavigate();
  const [clickedRooms, setClickedRooms] = useState([]);
  const [totalPlaques, setTotalPlaques] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const roundedPrice = Math.round(totalPrice);

  useEffect(() => {
    const storedRooms = JSON.parse(localStorage.getItem('clickedRooms')) || [];
    const uniqueRooms = Array.from(new Set(storedRooms)); // Supprime les doublons

    setClickedRooms(uniqueRooms);

    const plaques = uniqueRooms.length * 12;
    setTotalPlaques(plaques);
    setTotalPrice(plaques * 0.8);
  }, []);

  const handleRoomClick = (roomId) => {
    navigate(`/room-details/${roomId}`);
  };

  return (
    <div className="summary">
      <div className="summary-header">
        <h2>Récapitulatif</h2>
        <button className="close-button" onClick={() => window.history.back()}>
          &times;
        </button>
      </div>
      <p className="summary-subtitle">Web School Factory</p>
      <div className="summary-estimation">
        <div className="estimation-item">
          <img src={room} alt={"logo"} />
          <h4>{clickedRooms.length}</h4>
          <p>pièces</p>
        </div>
        <div className="estimation-item">
          <img className='plaque' src={plaques} alt={"logo"} />
          <h4>{totalPlaques}</h4>
          <p>plaques</p>
        </div>
        <div className="estimation-item">
          <img src={recycle} alt={"logo"} />
          <h4>...</h4>
          <p>plaques à recycler</p>
        </div>
        <div className="estimation-item">
          <img src={prix} alt={"logo"} />
          <h4>...</h4>
          <p>coût de recyclage</p>
        </div>
        <div className="estimation-item">
          <img src={rachat} alt={"logo"} />
          <h4>{roundedPrice}€</h4>
          <p>Prix de rachat</p>
        </div>
        <div className="estimation-item">
          <img src={people} alt={"logo"} />
          <h4>...</h4>
          <p>jours/homme</p>
        </div>
      </div>
      <div className="estimation-benefit">
        <p>Estimation bénéfice</p>
        <ul>
          <li>Offre chantier : 1000€</li>
          <li>Coût hypothèse estimé : 750€</li>
          <li>Coût recyclage estimé : 750€</li>
          <li>Prix rachat estimé : 350€</li>
          <li>Bénéfice estimé : 1300€</li>
        </ul>
      </div>
      <h3 className='detail'>DÉTAIL PAR PIÈCE</h3>
      <div className="room-cards">
        {clickedRooms.map((roomId, index) => {
          const roomDetails = JSON.parse(localStorage.getItem(`room-${roomId}`)) || {};
          return (
            <div key={index} className="room-card" onClick={() => handleRoomClick(roomId)}>
              <div className="room-info">
                <p>{roomId}</p>
                <p>12 plaques</p>
                <p>{roomDetails.roomCategory || 'Catégorie inconnue'}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Summary;
