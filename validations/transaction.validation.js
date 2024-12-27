const Joi = require("joi");
const { errorClientResponse } = require("@/helpers/response.helper");
const db = require("@/config/database");

const transactionValidation = (req, res, next) => {
  const schema = Joi.object({
    top_up_amount: Joi.number().greater(0).required(),
  });

  const validationError = schema.validate(req.body).error;
  if (validationError) {
    return errorClientResponse(
      res,
      102,
      "Parameter amount tidak valid. Pastikan diisi dengan angka positif lebih besar dari 0.",
      null
    );
  }
  next();
};

module.exports = {
  transactionValidation,
};
