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
    res.set("Authorization", `Bearer ${loginToken}`);
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
    const query = `SELECT email, first_name, last_name, profile_image FROM users WHERE email = ?`;
    let [user] = await db.query(query, [email]);
    if (user.length === 0) {
      return errorClientResponse(res, "User Tidak Ditemukan!", 404);
    }
    return successResponse(res, 0, "Sukses", user[0]);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const updateProfile = async (req, res) => {
  const { first_name, last_name } = req.body;
  const { email } = req.user;
  try {
    const query = `SELECT id FROM users WHERE email = ?`;
    let [user] = await db.query(query, [email]);
    if (user.length === 0) {
      return errorClientResponse(res, "User Tidak Ditemukan!", 404);
    }
    const update = `UPDATE users SET first_name = ?, last_name = ? WHERE email = ?`;
    await db.query(update, [first_name, last_name, email]);
    const updatedUserQuery = `SELECT email, first_name, last_name, profile_image FROM users WHERE email = ?`;
    let [updatedUser] = await db.query(updatedUserQuery, [email]);
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
      return errorClientResponse(res, "User Tidak Ditemukan!", 404);
    }
    if (!req.file) {
      return errorClientResponse(res, "File tidak ditemukan", 400);
    }

    const profileImageUrl = `${process.env.BASE_URL}/uploads/${req.file.filename}`;

    const query = `UPDATE users SET profile_image = ? WHERE email = ?`;
    await db.query(query, [req.file.filename, email]);

    return successResponse(res, 0, "Update Profile Image berhasil", {
      email,
      first_name: user[0].first_name,
      last_name: user[0].last_name,
      profile_image: profileImageUrl,
    });
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
