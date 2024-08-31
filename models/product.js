const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  product: {
    types: String,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
