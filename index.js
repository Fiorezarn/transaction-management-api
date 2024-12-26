const express = require("express");
const connection = require("./config/database");

const app = express();

app.use(express.json());

(async () => {
  try {
    await connection.getConnection();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
})();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
