const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .send('<h1>STORE API🛍️</h1><a href="/api/v1/products">Products Route</a>');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server listening on http://localhost:${PORT}`));
