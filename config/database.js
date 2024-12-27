const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

const env = process.env.NODE_ENV || "development";

let dbConfig;

if (env === "production") {
  dbConfig = {
    host: process.env.DB_HOST_PRODUCTION,
    user: process.env.DB_USERNAME_PRODUCTION,
    password:
      process.env.DB_PASSWORD_PRODUCTION === "null"
        ? null
        : process.env.DB_PASSWORD_PRODUCTION,
    database: process.env.DB_NAME_PRODUCTION,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  };
} else {
  dbConfig = {
    host: process.env.DB_HOST_DEVELOPMENT,
    user: process.env.DB_USERNAME_DEVELOPMENT,
    password:
      process.env.DB_PASSWORD_DEVELOPMENT === "null"
        ? null
        : process.env.DB_PASSWORD_DEVELOPMENT,
    database: process.env.DB_NAME_DEVELOPMENT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  };
}

const connection = mysql.createPool(dbConfig);

module.exports = connection;
