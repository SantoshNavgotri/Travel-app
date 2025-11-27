import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const navigate = useNavigate();
  const isAdminAuthenticated = useSelector((state) => state.adminAuth.isAdminAuthenticated);

  const [cards, setCards] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [newCard, setNewCard] = useState({
    name: '',
    img: '',
    price: '',
    location: '',
    time: '',
    stop: '',
  });

  useEffect(() => {
    if (!isAdminAuthenticated) {
      navigate('/admin/auth/signin');
    } else {
      fetchCards();
      fetchBookings();
    }
  }, [isAdminAuthenticated, navigate]);

  const fetchCards = async () => {
    try {
      const response = await axios.get('http://localhost:1234/getproduct');
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:1234/getbookings');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewCard({ ...newCard, [e.target.name]: e.target.value });
  };

  const handleAddCard = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:1234/addproduct', newCard);
      fetchCards();
      setNewCard({ name: '', img: '', price: '', location: '', time: '', stop: '' });
    } catch (error) {
      console.error('Error adding card:', error);
    }
  };

  const handleDeleteCard = async (id) => {
    try {
      await axios.delete(`http://localhost:1234/deleteproduct/${id}`);
      fetchCards();
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  if (!isAdminAuthenticated) {
    return null; // Or a loading spinner, or a message
  }

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <h3>Bookings</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Card Name</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.phone}</td>
              <td>{booking.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add New Card</h3>
      <form onSubmit={handleAddCard}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newCard.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={newCard.img}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newCard.price}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newCard.location}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="time"
          placeholder="Time"
          value={newCard.time}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="stop"
          placeholder="Stop"
          value={newCard.stop}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Card</button>
      </form>

      <h3>Existing Cards</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Location</th>
            <th>Time</th>
            <th>Stop</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr key={card._id}>
              <td>{card.name}</td>
              <td>
                <img src={card.img} alt={card.name} width="50" />
              </td>
              <td>{card.price}</td>
              <td>{card.location}</td>
              <td>{card.time}</td>
              <td>{card.stop}</td>
              <td>
                <Link to={`/admin/edit/${card._id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDeleteCard(card._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

