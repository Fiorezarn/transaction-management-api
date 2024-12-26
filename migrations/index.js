const db = require("../config/database");

(async () => {
  try {
    // Buat tabel users
    await db.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                email VARCHAR(255) NOT NULL UNIQUE,
                first_name VARCHAR(100) NOT NULL,
                last_name VARCHAR(100) NOT NULL,
                password VARCHAR(255) NOT NULL,
                profile_image VARCHAR(255) DEFAULT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
        `);

    console.log("Database migration completed successfully!");
  } catch (error) {
    console.error("Error during database migration:", error.message);
  } finally {
    process.exit();
  }
})();
