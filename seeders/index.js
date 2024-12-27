const db = require("../config/database");
const fs = require("fs");
const path = require("path");

const runSeeders = async (type) => {
  const files = fs.readdirSync(__dirname).filter((file) => file !== "index.js");
  const connection = await db.getConnection();

  try {
    for (const file of files) {
      console.log(`Running seeder: ${file}`);
      const seeder = require(path.join(__dirname, file));
      await seeder[type](connection);
    }
    console.log(`Seeders ${type} completed successfully.`);
  } catch (error) {
    console.error(`Error during seeders ${type}:`, error.message);
  } finally {
    connection.release();
    db.end();
  }
};

const main = async () => {
  const action = process.argv[2];
  if (!["up", "down"].includes(action)) {
    console.error("Please specify 'up' or 'down' as an argument.");
    process.exit(1);
  }
  await runSeeders(action);
};

main();
