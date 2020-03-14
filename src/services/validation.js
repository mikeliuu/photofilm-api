'use strict';

const Joi = require('@hapi/joi');

const validateSignup = data => {
  const schema = Joi.object({
    username: Joi
      .string()
      .required()
      .min(4),
    email: Joi
      .string()
      .required()
      .email(),
    password: Joi
      .string()
      .required()
      .min(4),
    password: Joi
      .string()
      .required()
      .min(4),
  }).unknown(true);

  return schema.validate(data);
};

const validateLogin = data => {
  const schema = Joi.object({
    email: Joi
      .string()
      .required()
      .min(4)
      .email(),
    password: Joi
      .string()
      .required()
      .min(4)
  }).unknown(true);;

  return schema.validate(data);
};

module.exports = {
  validateSignup,
  validateLogin
};