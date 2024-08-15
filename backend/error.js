const errorHandling = (err, req, res) => {
  if (err.status) {
    res.status(err.status).json({ msg: err.message });
  }
  res.status(500).json({ msg: err.message });
};

export default errorHandling

