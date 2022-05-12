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
-- Table structure for table `taixe`
--

DROP TABLE IF EXISTS `taixe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taixe` (
  `idtaixe` int NOT NULL AUTO_INCREMENT,
  `ten` varchar(45) NOT NULL,
  `cccd` int NOT NULL,
  `mabang` int NOT NULL,
  `loaibang` varchar(45) NOT NULL,
  `diachi` varchar(45) NOT NULL,
  `ngaysinh` date NOT NULL,
  `thamnien` int NOT NULL,
  PRIMARY KEY (`idtaixe`),
  UNIQUE KEY `idtaixe_UNIQUE` (`idtaixe`),
  UNIQUE KEY `cccd_UNIQUE` (`cccd`),
  UNIQUE KEY `mabang_UNIQUE` (`mabang`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taixe`
--

LOCK TABLES `taixe` WRITE;
/*!40000 ALTER TABLE `taixe` DISABLE KEYS */;
INSERT INTO `taixe` VALUES (1,'Hưng',10349367,9547,'C1','Thái Bình','1986-03-21',6),(2,'Hùng',12187423,92873,'E1','Hà Nội','1983-06-21',3),(3,'Nguyễn Bảo Ngọc',26174612,98737,'B2','Thái Nguyên','1987-10-23',2),(4,'Vương',23746512,26452,'A1','Hải Phòng','1989-05-28',4),(7,'Hưng Khánh',10349343,9532,'C2','Thái Bình','1986-03-21',10);
/*!40000 ALTER TABLE `taixe` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-24  7:47:30
