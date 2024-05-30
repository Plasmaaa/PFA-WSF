// src/components/EditChantier.js
import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChantierContext } from '../context/ChantierContext';
import './BuildingInfoForm.css';

const EditChantier = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const { chantiers, updateChantier } = useContext(ChantierContext);
  const [chantier, setChantier] = useState(null);

  useEffect(() => {
    const chantierToEdit = chantiers.find((ch) => ch.title === title);
    if (chantierToEdit) {
      setChantier(chantierToEdit);
    }
  }, [title, chantiers]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChantier({
      ...chantier,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateChantier(chantier);
    navigate('/');
  };

  if (!chantier) {
    return <div>Loading...</div>;
  }

  return (
    <div className="form-container">
      <h2>Modifier le chantier</h2>
      <p>Renseignez les informations principales du chantier.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Nom du chantier
          <input
            type="text"
            name="title"
            value={chantier.title}
            onChange={handleChange}
            placeholder="Entrez un nom"
          />
        </label>
        <label>
          Adresse du chantier
          <input
            type="text"
            name="address"
            value={chantier.address}
            onChange={handleChange}
            placeholder="Indiquez l'adresse"
          />
        </label>
        <label>
          Type de bâtiment
          <input
            type="text"
            name="type"
            value={chantier.type}
            onChange={handleChange}
            placeholder="Indiquez le type de bâtiment"
          />
        </label>
        <label>
          Nombre d’étage
          <input
            type="text"
            name="floors"
            value={chantier.floors}
            onChange={handleChange}
            placeholder="Indiquez le nombre d’étages"
          />
        </label>
        <label>
          Date de construction du bâtiment
          <input
            type="text"
            name="constructionDate"
            value={chantier.constructionDate}
            onChange={handleChange}
            placeholder="Indiquez la date de construction"
          />
        </label>
        <button type="submit">VALIDER</button>
      </form>
    </div>
  );
};

export default EditChantier;
