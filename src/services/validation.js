const Joi = require('@hapi/joi');

const validateSignup = data => {
  const schema = Joi.object({
    username: Joi
      .string()
      .required()
      .min(6),
    email: Joi
      .string()
      .required()
      .min(6)
      .email(),
    password: Joi
      .string()
      .required()
      .min(6),
    passwordConfirm: Joi
    .string()
    .required()
    .min(6)
  });

  return schema.validate(data);
};

const validateLogin = data => {
  const schema = Joi.object({
    email: Joi
      .string()
      .required()
      .min(6)
      .email(),
    password: Joi
      .string()
      .required()
      .min(6)
  });

  return schema.validate(data);
};

module.exports = {
  validateSignup,
  validateLogin
};