const notFound = (req, res) => {
  res.status(404).send('<h1>Route Doesn Not Exist⛔</h1>');
};

module.exports = notFound;
