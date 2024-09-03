const express = require('express');
const productsRouter = require('./routes/products');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();
require('express-async-errors');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res
    .status(200)
    .send('<h1>STORE API🛍️</h1><a href="/api/v1/products">Products Route</a>');
});
app.use('/api/v1/products', productsRouter);

// products routes
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server listening on http://localhost:${PORT}`));
