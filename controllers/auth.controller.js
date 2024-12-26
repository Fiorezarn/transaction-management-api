const bcrypt = require("bcrypt");
const db = require("@/config/database");
const {
  errorServerResponse,
  successResponse,
  errorClientResponse,
} = require("@/helpers/response.helper");
const { generateToken } = require("@/helpers/token.helper");
const { getPayload } = require("@/middleware/auth.middleware");

const registerUser = async (req, res) => {
  const { email, first_name, last_name, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const query = `INSERT INTO users (email, first_name, last_name, password) VALUES (?, ?, ?, ?)`;
    await db.query(query, [email, first_name, last_name, hashPassword]);
    return successResponse(res, 0, "Registrasi berhasil silahkan login", null);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const query = `SELECT email, password FROM users WHERE email = ?`;
    let [user] = await db.query(query, [email]);

    if (user.length === 0) {
      return errorClientResponse(res, "User Tidak Ditemukan!", 404);
    }

    const validPassword = await bcrypt.compare(password, user[0].password);
    if (!validPassword) {
      return errorClientResponse(res, "Password Salah!", 401);
    }

    const loginToken = generateToken(user[0].email, process.env.JWT_EXPIRES_IN);
    res.setHeader("Authorization", `Bearer ${loginToken}`);
    const data = {
      token: loginToken,
    };
    return successResponse(res, 0, "Login Sukses", data);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const getProfile = async (req, res) => {
  try {
    const query = `SELECT * FROM users WHERE email = ?`;
    const payload = getPayload();
    let [user] = await db.query(query, [payload.email]);
    if (user.length === 0) {
      return errorClientResponse(res, "User Tidak Ditemukan!", 404);
    }
    return successResponse(res, 0, "Get Profile Success", user[0]);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

module.exports = { registerUser, loginUser, getProfile };
