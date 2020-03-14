const User = require('../models/UserModel');
const { validateSignup, validateLogin } = require('../services/validation');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const getSignup = (req, res) => {
  
  try {
    console.log('get "/api/auth/signup" success');
    res.status(200).send('get signup');
  } 
  catch (err) {
    res.status(400).send(err);
  };
};


const getLogin = (req, res) => {

  try {
    console.log('get "/api/auth/login" success');
    res.status(200).send('get login');
  } 
  catch (err) {
    res.status(400).send(err);
  };
};


const postSignup = async (req, res) => {

  const { error } = validateSignup(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  if(req.body.password !== req.body.confirmPassword) return res.status(400).send('Password does not match');

  const emailExsit = await User.findOne({ email: req.body.email });
  if(emailExsit) return res.status(400).send('Email address already exists');

  const salt = 10;
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  if(!hashPassword) return res.status(400).send('Password cannot be saved, please try again');

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword
  });

  try {
    await user.save();
    console.log(`post signup [${user.username}] success`);
    
    res.status(200).send('Signed up successfully, please login');
  } 
  catch (err) {
    res.status(400).send(err);
  };
};


const postLogin = async (req, res) => {

  const { error } = validateLogin(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if(!user) return res.status(400).send('Email address is not found');

  validPassword = await bcrypt.compare(req.body.password, user.password);
  if(!validPassword) return res.status(400).send('Invalid password');

  try {
    const token = await jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, {expiresIn: '1h'});

    console.log(`post login [${user._id}] success`);

    res.header('Authorization', `Bearer ${token}`).send(token);
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