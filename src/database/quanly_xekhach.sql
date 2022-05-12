-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: quanly
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `xekhach`
--

DROP TABLE IF EXISTS `xekhach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `xekhach` (
  `idxekhach` int NOT NULL AUTO_INCREMENT,
  `bienso` varchar(45) NOT NULL,
  `mauxe` varchar(45) NOT NULL,
  `hangsx` varchar(45) NOT NULL,
  `doixe` varchar(45) NOT NULL,
  `model` varchar(45) NOT NULL,
  `soghe` int NOT NULL,
  `sonamsudung` int NOT NULL,
  `ngaybaoduong` date NOT NULL,
  PRIMARY KEY (`idxekhach`),
  UNIQUE KEY `bienso_UNIQUE` (`bienso`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xekhach`
--

LOCK TABLES `xekhach` WRITE;
/*!40000 ALTER TABLE `xekhach` DISABLE KEYS */;
INSERT INTO `xekhach` VALUES (1,'29E12743','Nâu','Honda','2016','MV-2',30,5,'2020-12-12'),(2,'17B27381','Đỏ','Toyota','2016','AZ-123',24,5,'2021-06-30'),(14,'17E25321','Nâu','Honda','2015','AC-2',32,6,'2019-06-23'),(16,'17E25213','Nâu','Toyota','2015','AC-2',20,6,'2019-02-13'),(17,'21E25321','Nâu','Honda','2016','TF-1',24,5,'2018-06-21'),(18,'23E25321','Nâu','Honda','2016','TF-1',24,5,'2018-06-21'),(19,'30E12745','Nâu','Ford','2016','TF-1',32,5,'2020-10-12'),(22,'29E12712','Nâu','Honda','2014','MV-2',30,7,'2020-12-12'),(23,'23A23212','Nâu','Honda','2015','AC-2',32,6,'2021-03-21');
/*!40000 ALTER TABLE `xekhach` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-24  7:47:31
