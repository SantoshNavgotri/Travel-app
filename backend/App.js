const express = require('express');
const server = express();
require('./db/Connection');

const PORT = 1234;

const products = require('./Models/Model.js');
const Booking = require('./Models/Booking.js');
const User = require('./Models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret_key'; // It's better to use an environment variable for this
const data = require('./DEfault/Default.js');
data();
const cors = require('cors');
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('hellow santosh');
});

server.post('/addproduct', async (req, res) => {
  try {
    const product = new products(req.body);
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (error) {
    res.json(error);
  }
});

server.get('/getproduct', async (req, res) => {
  try {
    const data = await products.find({});
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

server.get('/getproduct/:id', async (req, res) => {
  try {
    const data = await products.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

server.put('/updateproduct/:id', async (req, res) => {
  try {
    const updatedProduct = await products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedProduct);
  } catch (error) {
    res.json(error);
  }
});

server.delete('/deleteproduct/:id', async (req, res) => {
  try {
    const deletedProduct = await products.findByIdAndDelete(req.params.id);
    res.json(deletedProduct);
  } catch (error) {
    res.json(error);
  }
});

server.post('/book', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    const savedBooking = await booking.save();
    res.json(savedBooking);
  } catch (error) {
    res.json(error);
  }
});

server.get('/getbookings', async (req, res) => {
  try {
    const bookings = await Booking.find({});
    res.json(bookings);
  } catch (error) {
    res.json(error);
  }
});

server.listen(PORT, () => {
  console.log('server is running on port 1234');
});
