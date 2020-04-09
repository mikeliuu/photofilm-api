const User = require('../models/UserModel');

const getUsers = (req, res) => {
  res.send('Get all users')
};


module.exports = {
  getUsers
};