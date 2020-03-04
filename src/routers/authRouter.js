'use strict'
const authRouter = require('express').Router();
const authCTL = require('../controllers/authController');

authRouter.get('/signup', authCTL.getSignup);
authRouter.get('/login', authCTL.getLogin);
authRouter.post('/signup', authCTL.postSignup);
authRouter.post('/login', authCTL.postLogin);

module.exports = authRouter;