const User = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
  try {
    res.json({ message: "User API OK" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};