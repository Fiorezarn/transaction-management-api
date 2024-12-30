# 📄 PPOB Service API

This API allows users to check balances, top-ups, and transactions for various services, including mobile credit, PLN, and others.

## 📚 Table of Contents

1. [Introduction](#-ppob-service-api)
2. [Key Features](#-key-features)
3. [Tech Stack](#-tech-stack)
4. [API Contract Specification](#-api-contract-specification)
5. [Installation and Configuration](#-installation-and-configuration)
6. [Deployment](#-deployment)

## 🔧 Key Features

| **Feature**                   | **Description**                                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------------------------- |
| 🔑 **Registration and Login** | Password hashing using bcrypt, Input validation using Joi, Tokenization with jsonwebtoken         |
| 💳 **Balance Check**          | Real-time user balance data retrieval                                                             |
| 📤 **Top Up**                 | Balance increase by updating database values                                                      |
| 💸 **Transactions**           | Payment services like Airtime and Game Vouchers, Balance deduction according to transaction value |
| ⚠️ **Error Handling**         | Comprehensive input validation and error catching                                                 |

## Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Bcrypt](https://img.shields.io/badge/Bcrypt-003A70?style=for-the-badge&logo=lock&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![Multer](https://img.shields.io/badge/Multer-FF6600?style=for-the-badge&logo=files&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)
![Body Parser](https://img.shields.io/badge/Body_Parser-000000?style=for-the-badge&logo=npm&logoColor=white)
![Cookie Parser](https://img.shields.io/badge/Cookie_Parser-D4AA00?style=for-the-badge&logo=cookie&logoColor=white)
![Module Alias](https://img.shields.io/badge/Module_Alias-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Joi](https://img.shields.io/badge/Joi-0A7BBB?style=for-the-badge&logo=joi&logoColor=white)

## 📖 API Contract Specification

API documentation can be accessed via the following link:
[Swagger API Documentation](https://api-doc-tht.nutech-integrasi.com/#/)

## 🛠️ Installation and Configuration

1. Clone this repository:

```
git clone https://github.com/Fiorezarn/transaction-management-api
```

2. Enter the project directory:

```
cd transaction-management-api
```

3. Install dependencies:

```
npm install
```

4. Set up environment variables:

```bash
cp .env.example .env
```

5. Run the application:

```
npm start

```

6. Access the application via:

```
[http://localhost](http://localhost):`<PORT>`
```

## 🌐 Deployment

The API is deployed on Render and can be accessed at:

[https://transaction-management-api-jgs4.onrender.com](https://transaction-management-api-jgs4.onrender.com)

## 🧑🏻‍💻 Author

- [@Fioreza Radhin Naufal](https://github.com/Fiorezarn)
