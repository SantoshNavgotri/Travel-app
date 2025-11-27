import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BookingForm.css';

const BookingForm = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:1234/book', {
        ...formData,
        card: card
      });
      console.log('Booking successful:', response.data);
      setBookingSuccess(true);
    } catch (error) {
      console.error('Error booking:', error);
    }
  };

  if (!card) {
    return <div className="loading">Loading...</div>;
  }

  if (bookingSuccess) {
    return (
      <div className="booking-container">
        <div className="booking-success">
          <div className="success-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <h2>Booking Successful!</h2>
          <p>Your booking for the following trip has been confirmed.</p>
          <div className="success-card-details">
            <h3>{card.name}</h3>
            <p><i className="fas fa-rupee-sign"></i>Rs.{card.price}</p>
            <p><i className="fas fa-map-marker-alt"></i>{card.destination}</p>
            <p><i className="fas fa-clock"></i>{card.time}</p>
            <p><i className="fas fa-bus"></i>{card.routeDetails}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-container">
      <div className="booking-form-grid">
        <div className="card-details">
          <h2>{card.name}</h2>
          <img src={card.img} alt={card.name} />
          <p><i className="fas fa-rupee-sign"></i>Rs.{card.price}</p>
          <p><i className="fas fa-map-marker-alt"></i>{card.destination}</p>
          <p><i className="fas fa-clock"></i>{card.time}</p>
          <p><i className="fas fa-bus"></i>{card.routeDetails}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Your Details</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-submit">Submit Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
