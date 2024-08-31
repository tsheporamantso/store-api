const getAllProducts = (req, res) => {
  res.status(200).json({ msg: 'All products' });
};

const createProduct = (req, res) => {
  res.status(201).json({ msg: 'create a product' });
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
