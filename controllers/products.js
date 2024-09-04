/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unneeded-ternary */
const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ price: { $gte: 30 } })
    .sort('price')
    .select('name price')
    .limit(10)
    .skip(1);
  res.status(200).json({ nbHits: products.length, products });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields, numericFilters } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }
  let results = Product.find(queryObject);

  if (sort) {
    const sortList = sort.split(',').join(' ');
    results = results.sort(sortList);
  } else {
    results = results.sort('createdAt');
  }

  if (fields) {
    const fieldsList = fields.split(',').join(' ');
    results = results.select(fieldsList);
  }

  const page = +req.query.page || 1;
  const limit = +req.query.limit || 10;
  const skip = (page - 1) * limit;

  results = results.skip(skip).limit(limit);

  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '<': 'lt',
      '<=': 'lte',
      '=': 'eq',
      '!==': 'ne',
    };

    const regEx = /\b(>|>=|<|<=|=|!==)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ['price', 'rating'];
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }
  console.log(queryObject);
  const products = await results;
  res.status(200).json({ nbHits: products.length, products });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
