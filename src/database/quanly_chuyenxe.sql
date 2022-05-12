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
-- Table structure for table `chuyenxe`
--

DROP TABLE IF EXISTS `chuyenxe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chuyenxe` (
  `idchuyenxe` int NOT NULL AUTO_INCREMENT,
  `masochuyen` varchar(45) NOT NULL,
  `idlaixe` int NOT NULL,
  `idphuxe` int NOT NULL,
  `idxekhach` int NOT NULL,
  `sokhach` int NOT NULL,
  `gia` int NOT NULL,
  PRIMARY KEY (`idchuyenxe`),
  UNIQUE KEY `masochuyen_UNIQUE` (`masochuyen`),
  KEY `fk_chuyenxe_laixe` (`idlaixe`),
  KEY `fk_chuyenxe_phuxe` (`idphuxe`),
  KEY `fk_chuyenxe_xekhach_idx` (`idxekhach`),
  CONSTRAINT `fk_chuyenxe_laixe` FOREIGN KEY (`idlaixe`) REFERENCES `taixe` (`idtaixe`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_chuyenxe_phuxe` FOREIGN KEY (`idphuxe`) REFERENCES `taixe` (`idtaixe`),
  CONSTRAINT `fk_chuyenxe_soghe` FOREIGN KEY (`idxekhach`) REFERENCES `xekhach` (`idxekhach`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chuyenxe`
--

LOCK TABLES `chuyenxe` WRITE;
/*!40000 ALTER TABLE `chuyenxe` DISABLE KEYS */;
INSERT INTO `chuyenxe` VALUES (1,'TN1',1,2,1,16,60000),(2,'SB3',2,1,2,20,100000),(3,'AC4',3,4,22,11,130000),(4,'DG3',4,2,1,20,130000),(13,'NS2',1,3,14,24,120000),(18,'HS2',3,2,23,23,180000);
/*!40000 ALTER TABLE `chuyenxe` ENABLE KEYS */;
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
