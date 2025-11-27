const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  card: {
    type: Object,
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
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
