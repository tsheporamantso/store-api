const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: 'Testing static' });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: 'Get all products' });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
