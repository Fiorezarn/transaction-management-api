module.exports = {
  up: async (connection) => {
    await connection.query(`
          CREATE TABLE IF NOT EXISTS services (
          id INT AUTO_INCREMENT PRIMARY KEY,
          service_code VARCHAR(255) NOT NULL UNIQUE,
          service_name VARCHAR(100) NOT NULL,
          service_icon VARCHAR(100) NOT NULL,
          service_tariff INT NOT NULL,
          created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
        `);
  },
  down: async (connection) => {
    await connection.query(`DROP TABLE IF EXISTS services;`);
  },
};
