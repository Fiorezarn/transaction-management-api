const db = require("../config/database");
const fs = require("fs");
const path = require("path");

const runMigrations = async (type) => {
  let files = fs.readdirSync(__dirname).filter((file) => file !== "index.js"); // Ganti `const` dengan `let`
  if (type === "down") {
    files = files.reverse();
  }

  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    for (const file of files) {
      console.log(`Running migration: ${file}`);
      const migration = require(path.join(__dirname, file));
      await migration[type](connection);
    }

    await connection.commit();
    console.log(`Migrations ${type} completed successfully.`);
  } catch (error) {
    await connection.rollback();
    console.error(`Error during migrations ${type}:`, error.message);
  } finally {
    connection.release();
  }
};

const main = async () => {
  const action = process.argv[2];
  if (!["up", "down"].includes(action)) {
    console.error("Please specify 'up' or 'down' as an argument.");
    process.exit(1);
  }

  try {
    await runMigrations(action);
  } finally {
    db.end();
    process.exit(0);
  }
};

main();
