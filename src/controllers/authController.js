const ObjectID = require('mongoose').ObjectID;
const User = require('../models/UserModel');

const getSignup = (req, res) => {

  try {
    res.status(200).json('get signup');
  } 
  catch (err) {
    res.status(400).json(err);
  };
};

const getLogin = (req, res) => {

  try {
    res.status(200).json('get login');
  } 
  catch (err) {
    res.status(400).json(err);
  };
};

const postSignup = (req, res) => {

  try {
    res.status(200).json('post signup');
  } 
  catch (err) {
    res.status(400).json(err);
  };
};

const postLogin = (req, res) => {

  try {
    res.status(200).json('post signup');
  } 
  catch (err) {
    res.status(400).json(err);
  };
};

module.exports = {
  getSignup,
  getLogin,
  postSignup,
  postLogin
};