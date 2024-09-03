const connectDB = require('./db/connect');
const jsonProducts = require('./populate.json');
const Product = require('./models/product');
require('dotenv').config();

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log('Success');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
