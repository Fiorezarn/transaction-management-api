module.exports = {
  up: async (connection) => {
    await connection.query(`
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          email VARCHAR(255) NOT NULL UNIQUE,
          first_name VARCHAR(100) NOT NULL,
          last_name VARCHAR(100) NOT NULL,
          password VARCHAR(255) NOT NULL,
          profile_image VARCHAR(255) DEFAULT NULL,
          balance INT DEFAULT 0,
          created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
      `);
  },
  down: async (connection) => {
    await connection.query(`DROP TABLE IF EXISTS users;`);
  },
};
