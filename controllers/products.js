const Product = require('../models/product');

const getAllProducts = (req, res) => {
  res.status(200).json({ msg: 'All products' });
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getProduct = (req, res) => {
  res.status(200).json({ msg: 'Get a product' });
};

const updateProduct = (req, res) => {
  res.status(200).json({ msg: 'Update product' });
};

const deleteProduct = (req, res) => {
  res.status(200).json({ msg: 'Product deleted' });
};

module.exports = {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
