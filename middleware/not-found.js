const notFound = (req, res) => {
  res.status(400).send('<h1>Route does not exist⛔</h1>');
};

module.exports = notFound;
