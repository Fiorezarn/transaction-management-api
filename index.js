require("dotenv").config();
const path = require("path");
const express = require("express");
require("module-alias/register");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
const connection = require("./config/database");
const authRouter = require("@/routes/membership.route");
dotenv.config();
app.use(express.json());
app.use(bodyParser.json());

(async () => {
  try {
    await connection.getConnection();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
})();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(authRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
