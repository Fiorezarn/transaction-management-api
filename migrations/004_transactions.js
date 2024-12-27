module.exports = {
  up: async (connection) => {
    await connection.query(`
         CREATE TABLE IF NOT EXISTS transactions (
          id INT AUTO_INCREMENT PRIMARY KEY,
          user_id INT NOT NULL,
          service_code VARCHAR(255) NOT NULL,
          description VARCHAR(100) NOT NULL,
          transaction_type ENUM('TOPUP', 'PAYMENT') NOT NULL,
          total_amount INT NOT NULL,
          invoice_number VARCHAR(100) NOT NULL,
          created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
          FOREIGN KEY (service_code) REFERENCES services(service_code) ON DELETE CASCADE
        );
        `);
  },
  down: async (connection) => {
    await connection.query(`DROP TABLE IF EXISTS transactions;`);
  },
};
