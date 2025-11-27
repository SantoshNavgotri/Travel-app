import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState({
    name: '',
    img: '',
    price: '',
    location: '',
    time: '',
    stop: '',
  });

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await axios.get(`http://localhost:1234/getproduct/${id}`);
        setCard(response.data);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchCardData();
  }, [id]);

  const handleInputChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const handleUpdateCard = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:1234/updateproduct/${id}`, card);
      navigate('/admin');
    } catch (error) {
      console.error('Error updating card:', error);
    }
  };

  return (
    <div>
      <h2>Edit Card</h2>
      <form onSubmit={handleUpdateCard}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={card.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={card.img}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={card.price}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={card.location}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="time"
          placeholder="Time"
          value={card.time}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="stop"
          placeholder="Stop"
          value={card.stop}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Update Card</button>
      </form>
    </div>
  );
};

export default EditCard;
