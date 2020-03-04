const User = require('../models/UserModel');
const { validateSignup, validateLogin } = require('../services/validation');

const getSignup = (req, res) => {
  
  try {
    res.status(200).send('get signup');
  } 
  catch (err) {
    res.status(400).send(err);
  };
};

const getLogin = (req, res) => {

  try {
    res.status(200).send('get login');
  } 
  catch (err) {
    res.status(400).send(err);
  };
};

const postSignup = async (req, res) => {

  const { error } = validateSignup(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  if(req.body.password !== req.body.passwordConfirm) return res.status(400).send('Password does not match.');

  const emailExsit = await User.findOne({ email: req.body.email });
  if(emailExsit) return res.status(400).send('Email address already exists');

  const user = new User({
    username: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try {
    const savedUser = await user.save();
    res.status(200).send(savedUser);
  } 
  catch (err) {
    res.status(400).send(err);
  };
};

const postLogin = (req, res) => {

  try {
    res.status(200).send('post signup');
  } 
  catch (err) {
    res.status(400).send(err);
  };
};

module.exports = {
  getSignup,
  getLogin,
  postSignup,
  postLogin
};