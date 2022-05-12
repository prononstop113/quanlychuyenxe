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
-- Table structure for table `tuyenxe`
--

DROP TABLE IF EXISTS `tuyenxe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tuyenxe` (
  `idtuyenxe` int NOT NULL AUTO_INCREMENT,
  `lotrinh` varchar(45) NOT NULL,
  `dodai` int NOT NULL,
  `dophuctap` float NOT NULL,
  `idchuyenxe` int DEFAULT NULL,
  PRIMARY KEY (`idtuyenxe`),
  KEY `fk_tuyenxe_chuyenxe_idx` (`idchuyenxe`),
  CONSTRAINT `fk_tuyenxe_chuyenxe` FOREIGN KEY (`idchuyenxe`) REFERENCES `chuyenxe` (`idchuyenxe`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tuyenxe`
--

LOCK TABLES `tuyenxe` WRITE;
/*!40000 ALTER TABLE `tuyenxe` DISABLE KEYS */;
INSERT INTO `tuyenxe` VALUES (1,'Thái Bình - Hà Nội',105,1,NULL),(2,'Thanh Hóa - Hà Nội',150,1.1,18),(8,'Hà Nội - Điện Biên',450,1.3,1),(15,'Thái Bình - Quảng Ninh',105,1,2),(17,'Thái Bình - Hải Phòng',80,1,4),(18,'Thanh Hóa - Hải Phòng',110,1.1,18),(20,'Hải Phòng - Hà Nội',105,1,3);
/*!40000 ALTER TABLE `tuyenxe` ENABLE KEYS */;
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
