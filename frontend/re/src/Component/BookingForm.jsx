import React, { useState } from "react";
import axios from "axios";
import "./BookingForm.css";

const BookingForm = () => {
  const [selected, setSelected] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false); // SUCCESS FLAG
  const [savedBooking, setSavedBooking] = useState(null); // STORE DATA

  const vehicles = [
    {
      id: "bus",
      name: "Bus",
      img: "https://cdn-icons-png.flaticon.com/512/69/69928.png",
      price: "500",
      destination: "City A → City B",
      time: "5 Hours",
      routeDetails: "Highway Route 1",
    },
    {
      id: "car",
      name: "Car",
      img: "https://cdn-icons-png.flaticon.com/512/743/743007.png",
      price: "1200",
      destination: "City A → City B",
      time: "3 Hours",
      routeDetails: "Express Route",
    },
    {
      id: "bike",
      name: "Bike",
      img: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png",
      price: "300",
      destination: "City A → City B",
      time: "2 Hours",
      routeDetails: "Short Route",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ------------ SUBMIT BOOKING --------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        vehicleType: selected.name,
        selectedVehicle: selected,
      };

      const response = await axios.post("http://localhost:1234/book", payload);
      console.log("Booking Saved:", response.data);

      setSavedBooking(payload); // SAVE FOR SUCCESS SCREEN
      setBookingSuccess(true);  // SHOW SUCCESS UI
    } catch (err) {
      console.error("Booking Error:", err);
      alert("Error while booking!");
    }
  };

  if (bookingSuccess) {
    return (
      <div className="booking-container">
        <div className="booking-success">
          <div className="success-icon">
            <i className="fas fa-check-circle"></i>
          </div>

          <h2>Booking Successful!</h2>
          <p>Your booking has been confirmed.</p>

          <div className="success-card-details">
            <h3>{savedBooking.selectedVehicle.name}</h3>
            <p><strong>Price:</strong> ₹{savedBooking.selectedVehicle.price}</p>
            <p><strong>Route:</strong> {savedBooking.selectedVehicle.destination}</p>
            <p><strong>Time:</strong> {savedBooking.selectedVehicle.time}</p>
            <p><strong>Vehicle Type:</strong> {savedBooking.vehicleType}</p>
          </div>

          <button
            className="btn-submit"
            onClick={() => {
              setBookingSuccess(false);
              setSelected(null);
              setFormData({
                name: "",
                email: "",
                phone: "",
                vehicleType: "",
              });
            }}
          >
            Book Another Ride
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="booking-container">

      {/* ---------- Vehicle Cards ---------- */}
      {!selected && (
        <div className="vehicle-card-grid">
          {vehicles.map((item) => (
            <div
              key={item.id}
              className="vehicle-card"
              onClick={() => setSelected(item)}
            >
              <img src={item.img} alt={item.name} className="vehicle-img" />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>{item.destination}</p>
            </div>
          ))}
        </div>
      )}

      {/* ------------ Selected + Form ------------- */}
      {selected && (
        <div className="selected-area">
          
          {/* Selected Card */}
          <div className="selected-card">
            <img src={selected.img} alt={selected.name} />
            <h2>{selected.name}</h2>
            <p><strong>Price:</strong> ₹{selected.price}</p>
            <p><strong>Destination:</strong> {selected.destination}</p>
            <p><strong>Time:</strong> {selected.time}</p>
          </div>

          {/* Form */}
          <form className="booking-form1" onSubmit={handleSubmit}>
            <h2>Enter Your Details</h2>

            <div className="form-grid">

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
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              {/* Auto Vehicle Type */}
              <input
                type="text"
                name="vehicleType"
                value={selected.name}
                readOnly
              />

            </div>

            <button type="submit" className="btn-submit">
              Confirm Booking
            </button>
          </form>

        </div>
      )}
    </div>
  );
};

export default BookingForm;
