const db = require("@/config/database");
const {
  errorServerResponse,
  successResponse,
  errorClientResponse,
} = require("@/helpers/response.helper");

const getBalance = async (req, res) => {
  const { email } = req.user;
  try {
    const query = `SELECT balance FROM users WHERE email = ?`;
    let [balance] = await db.query(query, [email]);
    if (balance.length === 0) {
      return errorClientResponse(res, "User Tidak Ditemukan!", 404);
    }
    return successResponse(res, 0, "Get Balance Berhasil", balance[0]);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const topupBalance = async (req, res) => {
  const { email } = req.user;
  const { top_up_amount } = req.body;
  try {
    const query = `SELECT id, balance FROM users WHERE email = ?`;
    let [balance] = await db.query(query, [email]);
    if (balance.length === 0) {
      return errorClientResponse(res, "User Tidak Ditemukan!", 404);
    }
    const invoice_number = `INV-${Date.now()}-${balance[0].id}`;
    const update = `UPDATE users SET balance = ?, updated_at = CURRENT_TIMESTAMP WHERE email = ?`;
    const create = `INSERT INTO transactions (user_id, description, transaction_type, total_amount, invoice_number) VALUES (?, ?, ?, ?, ?)`;
    const [transaction] = await db.query(create, [
      balance[0].id,
      "Top Up balance",
      "TOPUP",
      top_up_amount,
      invoice_number,
    ]);
    if (transaction.affectedRows === 0) {
      return errorClientResponse(res, "Top Up Balance Gagal!", 500);
    }
    await db.query(update, [
      Number(top_up_amount) + Number(balance[0].balance),
      email,
    ]);
    const [result] = await db.query(query, [email]);
    return successResponse(res, 0, "Topup Balance Berhasil", {
      balance: result[0].balance,
    });
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const transaction = async (req, res) => {
  const { email } = req.user;
  const { service_code } = req.body;
  const invoice_number = `INV-${Date.now()}-${balance[0].id}`;
  try {
    const query = `SELECT id, balance FROM users WHERE email = ?`;
    let [balance] = await db.query(query, [email]);
    if (balance.length === 0) {
      return errorClientResponse(res, "User Tidak Ditemukan!", 404);
    }
    const [service] = await db.query(
      `SELECT service_tariff, service_name FROM services WHERE service_code = ?`,
      [service_code]
    );
    if (service.length === 0) {
      return errorClientResponse(res, "Service Tidak Ditemukan!", 404);
    }
    const update = `UPDATE users SET balance = ?, updated_at = CURRENT_TIMESTAMP WHERE email = ?`;
    const create = `INSERT INTO transactions (user_id, service_code, description, transaction_type, total_amount, invoice_number) VALUES (?, ?, ?, ?, ?, ?)`;
    await db.query(create, [
      balance[0].id,
      service_code,
      service[0].service_name,
      "PAYMENT",
      service[0].service_tariff,
      invoice_number,
    ]);

    if (balance[0].balance < service[0].service_tariff) {
      return errorClientResponse(res, "Saldo Tidak Cukup!", 400);
    }
    await db.query(update, [
      Number(balance[0].balance) - Number(service[0].service_tariff),
      email,
    ]);
    const [result] = await db.query(
      `SELECT invoice_number, services.service_code, services.service_name, transactions.transaction_type, total_amount, transactions.created_at FROM transactions 
      JOIN services ON transactions.service_code = services.service_code
      WHERE invoice_number = ?`,
      [invoice_number]
    );
    return successResponse(res, 0, "Pembayaran Berhasil", result[0]);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const getTransactionHistory = async (req, res) => {
  const { email } = req.user;
  const { limit = 10, offset = 0 } = req.params;
  try {
    const [user] = await db.query(
      `SELECT id, email FROM USERS WHERE email = ?`,
      [email]
    );
    const [service] = await db.query(
      `
      SELECT invoice_number, transaction_type, description, total_amount, created_at FROM TRANSACTIONS WHERE user_id = ?
      ORDER BY created_at DESC
      LIMIT ?
      OFFSET ?
      `,
      [user[0].id, parseInt(limit), parseInt(offset)]
    );

    const result = {
      limit: parseInt(limit),
      offset: parseInt(offset),
      records: service,
    };
    return successResponse(res, "Get History Berhasil", result);
  } catch (error) {
    console.log(error);
    return errorServerResponse(res, error.message);
  }
};

module.exports = {
  getBalance,
  topupBalance,
  transaction,
  getTransactionHistory,
};
