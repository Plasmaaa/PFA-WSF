// Header.js
import React from 'react';
import back from '../images/back.svg'; // Assurez-vous que le chemin est correct

const Header = ({ title }) => {
  return (
    <div className="header">
      <button className="back-button" onClick={() => window.history.back()}>
        <img src={back} alt="Back" />
        <p className="back-button-text"></p>
      </button>
      {title && <h1 className="header-title">{title}</h1>}
      <div className="spacer"></div>
    </div>
  );
};

export default Header;
