// src/components/AddChantierForm.js
import React, { useState, useContext } from 'react';
import { ChantierContext } from '../context/ChantierContext';
import image1 from '../images/ecole.svg';
import image2 from '../images/hopital.svg';
import bgImage1 from '../images/wsf.svg';
import bgImage2 from '../images/kys.svg';
import bgImage3 from '../images/playmobile.svg';

const AddChantierForm = () => {
  const { addChantier } = useContext(ChantierContext);
  const [chantier, setChantier] = useState({
    image: '',
    backgroundImage: '',
    title: '',
    subtitle: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChantier({ ...chantier, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addChantier(chantier);
    setChantier({
      image: '',
      backgroundImage: '',
      title: '',
      subtitle: '',
      status: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Image:
        <select name="image" value={chantier.image} onChange={handleChange}>
          <option value="">Select</option>
          <option value={image1}>Ecole</option>
          <option value={image2}>Hôpital</option>
        </select>
      </label>
      <label>
        Background Image:
        <select name="backgroundImage" value={chantier.backgroundImage} onChange={handleChange}>
          <option value="">Select</option>
          <option value={bgImage1}>WSF</option>
          <option value={bgImage2}>KYS</option>
          <option value={bgImage3}>Playmobile</option>
        </select>
      </label>
      <label>
        Title:
        <input type="text" name="title" value={chantier.title} onChange={handleChange} />
      </label>
      <label>
        Subtitle:
        <input type="text" name="subtitle" value={chantier.subtitle} onChange={handleChange} />
      </label>
      <label>
        Status:
        <input type="text" name="status" value={chantier.status} onChange={handleChange} />
      </label>
      <button type="submit">Ajouter Chantier</button>
    </form>
  );
};

export default AddChantierForm;
