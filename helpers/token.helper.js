const jwt = require("jsonwebtoken");

const generateToken = (email, expiresIn) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: expiresIn,
  });
  return token;
};

module.exports = { generateToken };
