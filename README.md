# 🚀 Assignment API Programmer

## 📄 Project Description

This project aims to build a REST API using Node.js, Express.js, and MySQL2 based on the specifications provided in the API Contract document (Swagger). The REST API covers the following modules:

- 🔑 Registration
- 🔐 Login
- 💳 Balance Check
- 📤 Top Up
- 💸 Transactions (including payment services like Airtime, Game Vouchers, etc.)

This project meets the criteria and technical requirements set by the assessment team.

## 🔧 Key Features

### 🔑 Registration and Login:
- Password hashing using bcrypt
- Input validation using Joi
- Tokenization with jsonwebtoken

### 💳 Balance Check:
- Real-time user balance data retrieval

### 📤 Top Up:
- Balance increase by updating database values

### 💸 Transactions:
- Payment services like Airtime and Game Vouchers
- Balance deduction according to transaction value

### ⚠️ Error Handling:
- Comprehensive input validation and error catching

## 📊 Technologies Used

- Node.js: JavaScript runtime platform for server
- Express.js: Framework for building REST APIs
- MySQL2: Library for MySQL database connection with prepared statement support
- bcrypt: For password hashing
- jsonwebtoken: For authentication using JWT tokens
- multer: For file uploads
- dotenv: For environment variable configuration
- body-parser: For request body parsing
- cookie-parser: For cookie management
- module-alias: For path aliasing in the application
- Joi: For input data schema validation

## 📖 API Contract Specification

API documentation can be accessed via the following link:
[Swagger API Documentation](#)

## 🛠️ Installation and Configuration

1. Clone this repository:

```
git clone https://github.com/Fiorezarn/transaction-management-api
```
2. Enter the project directory:
```
cd <FOLDER_NAME>
```

3. Install dependencies:
```
npm install
```

4. Create a .env file for environment variable configuration:
```
DB_HOST=<database_host>
DB_USER=<database_username>
DB_PASSWORD=<database_password>
DB_NAME=<database_name>
JWT_SECRET=<secret_key>
```

5. Run the application:
```
npm start

```
6. Access the application via:
```
[http://localhost](http://localhost):`<PORT>`
```
## 🔄 Database Structure

The database design is included in the repository as a DDL file named `database_schema.sql`. This file includes:

- Tables for users, transactions, and top-ups
- Indexes and relationships between tables to maximize query performance


## 🌐 Deployment

This project is deployed using Railway. The deployed application URL has been included in the task submission email.

## ✅ Testing

- Ensure all modules work according to API specifications
- Use Postman to test endpoints
- Check input validation and error handling

## 🚀 Task Submission

This task has been completed according to the specified criteria and requirements. Submission information:

- Deployed application URL
- Git repository URL
