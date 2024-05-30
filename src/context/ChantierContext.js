// src/context/ChantierContext.js
import React, { createContext, useState } from 'react';

export const ChantierContext = createContext();

export const ChantierProvider = ({ children }) => {
  const [chantiers, setChantiers] = useState([]);

  const addChantier = (chantier) => {
    setChantiers([...chantiers, chantier]);
  };

  const deleteChantier = (title) => {
    setChantiers(chantiers.filter((chantier) => chantier.title !== title));
  };

  const updateChantier = (updatedChantier) => {
    setChantiers(
      chantiers.map((chantier) =>
        chantier.title === updatedChantier.title ? updatedChantier : chantier
      )
    );
  };

  return (
    <ChantierContext.Provider value={{ chantiers, addChantier, deleteChantier, updateChantier }}>
      {children}
    </ChantierContext.Provider>
  );
};
