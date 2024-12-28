const bcrypt = require("bcrypt");
const db = require("@/config/database");
const {
  errorServerResponse,
  successResponse,
  errorClientResponse,
} = require("@/helpers/response.helper");
const { generateToken } = require("@/helpers/token.helper");

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
    let [user] = await db.query(
      `SELECT email, password FROM users WHERE email = ?`,
      [email]
    );

    if (user.length === 0) {
      return errorClientResponse(res, 102, "User Tidak Ditemukan!", null, 404);
    }

    const validPassword = await bcrypt.compare(password, user[0].password);
    if (!validPassword) {
      return errorClientResponse(
        res,
        103,
        "Username atau password salah",
        null,
        401
      );
    }

    const loginToken = generateToken(user[0].email, process.env.JWT_EXPIRES_IN);
    const data = {
      token: loginToken,
    };
    return successResponse(res, 0, "Login Sukses", data);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const getProfile = async (req, res) => {
  const { email } = req.user;
  try {
    let [user] = await db.query(
      `SELECT email, first_name, last_name, profile_image FROM users WHERE email = ?`,
      [email]
    );
    if (user.length === 0) {
      return errorClientResponse(res, 102, "User Tidak Ditemukan!", null, 404);
    }
    user[0].profile_image !== null
      ? (user[0].profile_image = `${process.env.BASE_URL}/uploads/${user[0].profile_image}`)
      : (user[0].profile_image = null);
    return successResponse(res, 0, "Sukses", user[0]);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const updateProfile = async (req, res) => {
  const { first_name, last_name } = req.body;
  const { email } = req.user;
  try {
    const query = `SELECT email, first_name, last_name, profile_image FROM users WHERE email = ?`;
    let [user] = await db.query(query, [email]);
    if (user.length === 0) {
      return errorClientResponse(res, 102, "User Tidak Ditemukan!", null, 404);
    }
    const update = `UPDATE users SET first_name = ?, last_name = ? WHERE email = ?`;
    await db.query(update, [first_name, last_name, email]);
    let [updatedUser] = await db.query(query, [email]);
    return successResponse(res, 0, "Update Pofile berhasil", updatedUser[0]);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const updateProfileImage = async (req, res) => {
  const { email } = req.user;
  try {
    const queryUser = `SELECT email, first_name, last_name, profile_image FROM users WHERE email = ?`;
    let [user] = await db.query(queryUser, [email]);
    if (user.length === 0) {
      return errorClientResponse(res, 102, "User Tidak Ditemukan!", null, 404);
    }
    if (!req.file) {
      return errorClientResponse(res, 102, "File tidak ditemukan", null);
    }

    const query = `UPDATE users SET profile_image = ? WHERE email = ?`;
    await db.query(query, [req.file.filename, email]);
    let [result] = await db.query(queryUser, [email]);
    result[0].profile_image = `${process.env.BASE_URL}/uploads/${result[0].profile_image}`;
    return successResponse(res, 0, "Update Profile Image berhasil", result[0]);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  updateProfileImage,
};
