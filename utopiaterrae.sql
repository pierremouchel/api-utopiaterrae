-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mar. 07 avr. 2020 à 14:41
-- Version du serveur :  5.7.26
-- Version de PHP :  7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `utopiaterrae`
--

-- --------------------------------------------------------

--
-- Structure de la table `climate`
--
DROP TABLE IF EXISTS `climate`;
CREATE TABLE IF NOT EXISTS `climate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location_id` int(11) NOT NULL,
  `year_id` int(11) NOT NULL,
  `sea_level` float DEFAULT NULL,
  `pollution_level` float DEFAULT NULL,
  `temperature` float DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `location_id` (`location_id`),
  KEY `year_id` (`year_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
ALTER TABLE `climate` AUTO_INCREMENT = 1;

--
-- Structure de la table `location`
--

DROP TABLE IF EXISTS `location`;
CREATE TABLE IF NOT EXISTS `location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
ALTER TABLE `location` AUTO_INCREMENT = 1;


-- --------------------------------------------------------

--
-- Structure de la table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
ALTER TABLE `user` AUTO_INCREMENT = 1;

-- --------------------------------------------------------

--
-- Structure de la table `year`
--

DROP TABLE IF EXISTS `year`;
CREATE TABLE IF NOT EXISTS `year` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(4) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
ALTER TABLE `year` AUTO_INCREMENT = 1;


--
-- Contraintes pour la table `climate`
--
ALTER TABLE `climate`
  ADD CONSTRAINT `climate_ibfk_1` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`),
  ADD CONSTRAINT `climate_ibfk_2` FOREIGN KEY (`year_id`) REFERENCES `year` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
--
-- Déchargement des données de la table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200402091208-create-user.js'),
('20200402142420-create-location.js'),
('20200402142503-create-year.js'),
('20200402142623-create-climate.js');


INSERT INTO year(year) VALUES (2000),(2010),(2020),(2030),(2040),(2050),(2060),(2070),(2080),(2090),(2100);

INSERT INTO location(latitude, longitude) VALUES 
('20.25', '21.23'),
('42.3', '45.20'),
('13.29', '5.36');

INSERT INTO `climate` (`location_id`, `year_id`, `sea_level`, `pollution_level`, `temperature`) VALUES
( 3, 1, 25, 2, 34.7),
( 3, 2, 25.4, 2.1, 34.3),
( 3, 3, 25.8, 2.4, 36.4),
( 3, 4, 26.1, 2.8, 37.8),
( 3, 5, 26.3, 3, 39.3),
( 3, 6, 26.7, 3.3, 41.2),
( 3, 7, 27.4, 3.7, 42),
( 3, 8, 28.2, 4.1, 42.9),
( 3, 9, 28.9, 4.6, 44.1),
( 3, 10, 29.5, 5.2, 45.3),
( 3, 11, 31, 6, 46.4);

COMMIT;


