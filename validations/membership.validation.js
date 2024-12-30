const Joi = require("joi");
const {
  errorClientResponse,
  errorServerResponse,
} = require("@/helpers/response.helper");
const db = require("@/config/database");

const registerValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      "string.base": "Email must be a text string.",
      "string.empty": "Email cannot be empty.",
      "string.email": "Parameter email tidak sesuai format",
      "any.required": "Email is a required field.",
    }),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    password: Joi.string().required().min(8).messages({
      "string.base": "Password must be a text string.",
      "string.empty": "Password cannot be empty.",
      "string.min": "Password must be at least {#limit} characters long.",
      "any.required": "Password is a required field.",
    }),
  });

  const validationError = schema.validate(req.body).error;
  if (validationError) {
    return errorClientResponse(
      res,
      102,
      validationError.details[0].message,
      null
    );
  }
  next();
};

const updateProfileValidation = (req, res, next) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
  });

  const validationError = schema.validate(req.body).error;
  if (validationError) {
    return errorClientResponse(
      res,
      102,
      validationError.details[0].message,
      null
    );
  }
  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      "string.base": "Email must be a text string.",
      "string.empty": "Email cannot be empty.",
      "string.email": "Parameter email tidak sesuai format",
      "any.required": "Email is a required field.",
    }),
    password: Joi.string().required().min(8).messages({
      "string.base": "Password must be a text string.",
      "string.empty": "Password cannot be empty.",
      "string.min": "Password must be at least {#limit} characters long.",
      "any.required": "Password is a required field.",
    }),
  });

  const validationError = schema.validate(req.body).error;
  if (validationError) {
    return errorClientResponse(
      res,
      102,
      validationError.details[0].message,
      null
    );
  }
  next();
};

const checkDuplicate = async (req, res, next) => {
  const { email } = req.body;

  try {
    const [user] = await db.query(`SELECT email FROM users WHERE email = ?`, [
      email,
    ]);

    if (user.length !== 0) {
      return errorClientResponse(
        res,
        102,
        `User with ${email} already exists`,
        null
      );
    }
    next();
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

module.exports = {
  registerValidation,
  loginValidation,
  checkDuplicate,
  updateProfileValidation,
};
