const successResponse = (res, status, message, data, code = 200) => {
  return res.status(code).send({
    status,
    message,
    data,
  });
};

const errorServerResponse = (res, message, code = 500) => {
  return res.status(code).send({
    status: "error",
    code,
    message,
  });
};

const errorClientResponse = (res, status, message, data, code = 400) => {
  return res.status(code).send({
    status,
    message,
    data,
  });
};

module.exports = {
  successResponse,
  errorServerResponse,
  errorClientResponse,
};
