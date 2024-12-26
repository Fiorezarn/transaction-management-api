const jwt = require("jsonwebtoken");
const { errorClientResponse } = require("@/helpers/response.helper");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader, "ini auth header");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return errorClientResponse(
      res,
      "Token tidak ditemukan atau format salah!",
      401
    );
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload;
    next();
  } catch (error) {
    return errorClientResponse(res, "Token tidak valid atau kadaluarsa!", 401);
  }
};

const getPayload = () => {
  const headers = req.headers.authorization;
  const token = headers.split(" ")[1];
  const payload = jwt.verify(token, process.env.JWT_SECRET);
  return payload;
};

module.exports = { authenticateToken, getPayload };
