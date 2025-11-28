const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  card: {
    type: Object,
    required: true,
  },

  // Vehicle Type (Bus, Car, Bike)
  vehicleType: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  // Booking Date
  date: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
