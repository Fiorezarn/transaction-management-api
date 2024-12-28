-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: sims
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `banners`
--

DROP TABLE IF EXISTS `banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `banners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `banner_name` varchar(255) NOT NULL,
  `banner_image` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `created_on` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_on` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `banner_name` (`banner_name`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banners`
--

LOCK TABLES `banners` WRITE;
/*!40000 ALTER TABLE `banners` DISABLE KEYS */;
INSERT INTO `banners` VALUES (8,'Banner 1','https://nutech-integrasi.app/dummy.jpg','Lerem Ipsum Dolor sit amet','2024-12-27 10:01:39','2024-12-27 10:01:39'),(9,'Banner 2','https://nutech-integrasi.app/dummy.jpg','Lerem Ipsum Dolor sit amet','2024-12-27 10:01:40','2024-12-27 10:01:40'),(10,'Banner 3','https://nutech-integrasi.app/dummy.jpg','Lerem Ipsum Dolor sit amet','2024-12-27 10:01:40','2024-12-27 10:01:40'),(11,'Banner 4','https://nutech-integrasi.app/dummy.jpg','Lerem Ipsum Dolor sit amet','2024-12-27 10:01:40','2024-12-27 10:01:40'),(12,'Banner 5','https://nutech-integrasi.app/dummy.jpg','Lerem Ipsum Dolor sit amet','2024-12-27 10:01:40','2024-12-27 10:01:40'),(13,'Banner 6','https://nutech-integrasi.app/dummy.jpg','Lerem Ipsum Dolor sit amet','2024-12-27 10:01:40','2024-12-27 10:01:40');
/*!40000 ALTER TABLE `banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `service_code` varchar(255) NOT NULL,
  `service_name` varchar(100) NOT NULL,
  `service_icon` varchar(100) NOT NULL,
  `service_tariff` int NOT NULL,
  `created_on` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_on` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `service_code` (`service_code`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (13,'PAJAK','Pajak PBB','https://nutech-integrasi.app/dummy.jpg',40000,'2024-12-27 10:01:40','2024-12-27 10:01:40'),(14,'PLN','Listrik','https://nutech-integrasi.app/dummy.jpg',10000,'2024-12-27 10:01:40','2024-12-27 10:01:40'),(15,'PDAM','PDAM Berlangganan','https://nutech-integrasi.app/dummy.jpg',40000,'2024-12-27 10:01:40','2024-12-27 10:01:40'),(16,'PULSA','Pulsa','https://nutech-integrasi.app/dummy.jpg',40000,'2024-12-27 10:01:40','2024-12-27 10:01:40'),(17,'PGN','PGN Berlangganan','https://nutech-integrasi.app/dummy.jpg',50000,'2024-12-27 10:01:40','2024-12-27 10:01:40'),(18,'MUSIK','Musik Berlangganan','https://nutech-integrasi.app/dummy.jpg',50000,'2024-12-27 10:01:40','2024-12-27 10:01:40'),(19,'TV','TV Berlangganan','https://nutech-integrasi.app/dummy.jpg',50000,'2024-12-27 10:01:40','2024-12-27 10:01:40'),(20,'PAKET_DATA','Paket data','https://nutech-integrasi.app/dummy.jpg',50000,'2024-12-27 10:01:40','2024-12-27 10:01:40'),(21,'VOUCHER_GAME','Voucher Game','https://nutech-integrasi.app/dummy.jpg',100000,'2024-12-27 10:01:40','2024-12-27 10:01:40'),(22,'VOUCHER_MAKANAN','Voucher Makanan','https://nutech-integrasi.app/dummy.jpg',100000,'2024-12-27 10:01:41','2024-12-27 10:01:41'),(23,'QURBAN','Qurban','https://nutech-integrasi.app/dummy.jpg',200000,'2024-12-27 10:01:41','2024-12-27 10:01:41'),(24,'ZAKAT','Zakat','https://nutech-integrasi.app/dummy.jpg',300000,'2024-12-27 10:01:41','2024-12-27 10:01:41');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `service_code` varchar(255) NOT NULL,
  `description` varchar(100) NOT NULL,
  `transaction_type` enum('TOPUP','PAYMENT') NOT NULL,
  `total_amount` int NOT NULL,
  `invoice_number` varchar(100) NOT NULL,
  `created_on` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_on` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `service_code` (`service_code`),
  CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`service_code`) REFERENCES `services` (`service_code`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `balance` int DEFAULT '0',
  `created_on` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_on` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'fiorezarn@gmail.com','fioreza','naufal','$2b$10$2BFN.d7WFQ349ZKl8AcGouLohkvEVXkuVdzGipRcOTM06l9BS2pfO',NULL,0,'2024-12-27 10:11:36','2024-12-27 10:11:36');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'sims'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-28 15:50:55
