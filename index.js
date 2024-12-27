require("dotenv").config();
const path = require("path");
const express = require("express");
require("module-alias/register");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
const connection = require("./config/database");
const membershipRouter = require("@/routes/membership.route");
const informationRouter = require("@/routes/information.route");
const transactionRouter = require("@/routes/transaction.route");
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
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(membershipRouter);
app.use(informationRouter);
app.use(transactionRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
