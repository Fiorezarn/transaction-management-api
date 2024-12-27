module.exports = {
  up: async (connection) => {
    await connection.query(`
        CREATE TABLE IF NOT EXISTS banners (
          id INT AUTO_INCREMENT PRIMARY KEY,
          banner_name VARCHAR(255) NOT NULL UNIQUE,
          banner_image VARCHAR(100) NOT NULL,
          description VARCHAR(100) NOT NULL,
          created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
      `);
  },
  down: async (connection) => {
    await connection.query(`DROP TABLE IF EXISTS banners;`);
  },
};
