// src/components/ChantierList.js
import React, { useContext } from 'react';
import ChantierCard from './ChantierCard';
import { ChantierContext } from '../context/ChantierContext';
import wsf from '../images/wsf.svg'
import ecole from '../images/ecole.svg'

const ChantierList = () => {
  const { chantiers } = useContext(ChantierContext);

  return (
    <div className="chantier-list">
      <h3>Cliquez sur le + pour ajouter un chantier</h3>
      {chantiers.map((chantier, index) => (
        <ChantierCard
          key={index}
          image={ecole}
          backgroundImage={wsf}
          title={chantier.title}
          subtitle={chantier.subtitle}
          status={chantier.status}
        />
      ))}
    </div>
  );
};

export default ChantierList;
