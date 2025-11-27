import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CardDetail = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const navigate = useNavigate();

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

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>{card.name}</h2>
      <img src={card.img} alt={card.name} />
      <p>{card.price}</p>
      <p>{card.location}</p>
      <p>{card.time}</p>
      <p>{card.stop}</p>
      <Link to={`/booking/${id}`}>
        <button className="btn btn-dark">Book Now</button>
      </Link>
    </div>
  );
};

export default CardDetail;
