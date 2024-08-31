const express = require('express');
const products = require('./routes/products');
const connectDB = require('./db/connect');
require('dotenv').config();

const app = express();

/*
! Middleware
*/
app.use('/api/v1/products', products);
app.use(express.json());

/*
! Routes
*/
app.get('/', (req, res) => {
  res.status(200).send('<h1>Store🛒</h1>');
});

const { PORT } = process.env || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server listening http://localhost:${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
