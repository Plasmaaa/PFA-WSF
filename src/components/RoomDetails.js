// src/components/RoomDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RoomDetails.css';

const RoomDetails = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [roomDetails, setRoomDetails] = useState({
    roomType: '',
    roomState: '',
    windowCount: '',
    windowSize: '',
    falseCeiling: '',
    insulation: '',
    surfaceArea: '',
    roomCategory: '',
    finish: ''
  });

  const [categories, setCategories] = useState(
    JSON.parse(localStorage.getItem('categories')) || []
  );
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    const storedDetails = JSON.parse(localStorage.getItem(`room-${roomId}`));
    if (storedDetails) {
      setRoomDetails(storedDetails);
    }
  }, [roomId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomDetails({
      ...roomDetails,
      [name]: value
    });
  };


  
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setRoomDetails((prevDetails) => ({
      ...prevDetails,
      roomCategory: selectedCategory
    }));

    // Check if the category has already been used and pre-fill the form
    const categoryDetails = JSON.parse(localStorage.getItem(`category-${selectedCategory}`));
    if (categoryDetails) {
      setRoomDetails((prevDetails) => ({
        ...prevDetails,
        ...categoryDetails,
        roomCategory: selectedCategory // Ensure the category is set
      }));
    }
  };

  const handleNewCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      const updatedCategories = [...categories, newCategory];
      setCategories(updatedCategories);
      localStorage.setItem('categories', JSON.stringify(updatedCategories));
      setNewCategory('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(`room-${roomId}`, JSON.stringify(roomDetails));

    // Save the category details
    if (roomDetails.roomCategory) {
      localStorage.setItem(`category-${roomDetails.roomCategory}`, JSON.stringify(roomDetails));
    }

    navigate('/detailed-analysis');
  };

  return (
    <div className="room-details">
      <h2>Détail de la pièce {roomId}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Type de pièce:
          <select name="roomType" value={roomDetails.roomType} onChange={handleChange}>
            <option value="">Sélectionner un type</option>
            <option value="humide">Humide</option>
            <option value="ignifugé">Ignifugé</option>
            <option value="normal">Normal</option>
          </select>
        </label>
        <label>
          Etat de la pièce:
          <select name="roomState" value={roomDetails.roomState} onChange={handleChange}>
            <option value="">Sélectionner un état</option>
            <option value="neuf">Bon</option>
            <option value="dégats des eaux">dégats des eaux</option>
            <option value="Fissure">Fissure</option>
          </select>
        </label>
        <label>
          Nombre de fenêtres:
          <input type="text" name="windowCount" value={roomDetails.windowCount} onChange={handleChange} />
        </label>
        <label>
          Fenêtres (L, H):
          <input type="text" name="windowSize" value={roomDetails.windowSize} onChange={handleChange} />
        </label>
        <label>
          Faux plafond:
          <input type="text" name="falseCeiling" value={roomDetails.falseCeiling} onChange={handleChange} />
        </label>
        <label>
          Finition:
          <select name="finish" value={roomDetails.finish} onChange={handleChange}>
            <option value="">Sélectionner une finition</option>
            <option value="peinture">Peinture</option>
            <option value="papier peint">Papier Peint</option>
            <option value="enduit">Enduit</option>
          </select>
        <label>
          Superficie:
          <input type="text" name="surfaceArea" value={roomDetails.surfaceArea} onChange={handleChange} />
        </label>
        <label>
          Catégorie de pièce:
          <select name="roomCategory" value={roomDetails.roomCategory} onChange={handleCategoryChange}>
            <option value="">Sélectionner une catégorie</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </label>
        <label>
          Nouvelle catégorie:
          <input type="text" value={newCategory} onChange={handleNewCategoryChange} />
          <button type="button" onClick={handleAddCategory}>Ajouter</button>
        </label>
       
        </label>
        <button type="submit" className="next-button">SUIVANT</button>
      </form>
    </div>
  );
};

export default RoomDetails;
