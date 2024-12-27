const jwt = require("jsonwebtoken");
const { errorClientResponse } = require("@/helpers/response.helper");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return errorClientResponse(
      res,
      102,
      "Token tidak ditemukan atau format salah!",
      null,
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

module.exports = { authenticateToken };
