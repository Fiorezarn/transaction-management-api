const db = require("../config/database");

(async () => {
  try {
    // Create table users
    await db.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                email VARCHAR(255) NOT NULL UNIQUE,
                first_name VARCHAR(100) NOT NULL,
                last_name VARCHAR(100) NOT NULL,
                password VARCHAR(255) NOT NULL,
                profile_image VARCHAR(255) DEFAULT NULL,
                balance INT DEFAULT 0,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
        `);
    // Create table banners
    await db.query(`
          CREATE TABLE IF NOT EXISTS banners (
              id INT AUTO_INCREMENT PRIMARY KEY,
              banner_name VARCHAR(255) NOT NULL UNIQUE,
              banner_image VARCHAR(100) NOT NULL,
              description VARCHAR(100) NOT NULL,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
          );
      `);
    // Create table services
    await db.query(`
        CREATE TABLE IF NOT EXISTS services (
            id INT AUTO_INCREMENT PRIMARY KEY,
            service_code VARCHAR(255) NOT NULL UNIQUE,
            service_name VARCHAR(100) NOT NULL,
            service_icon VARCHAR(100) NOT NULL,
            service_tariff INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
    `);
    // Create table transactions
    await db.query(`
            CREATE TABLE IF NOT EXISTS transactions (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            service_code VARCHAR(255) NULL,
            description VARCHAR(100) NOT NULL,
            transaction_type ENUM('TOPUP', 'PAYMENT') NOT NULL,
            total_amount INT NOT NULL,
            invoice_number VARCHAR(100) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id),
            FOREIGN KEY (service_code) REFERENCES services(service_code)
      );
  `);

    console.log("Database migration completed successfully!");
  } catch (error) {
    console.error("Error during database migration:", error.message);
  } finally {
    process.exit();
  }
})();
