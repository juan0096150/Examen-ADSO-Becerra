-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 23-05-2024 a las 15:45:49
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `examen-adso`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crear_factura` (IN `_usuario` VARCHAR(100), IN `_producto` VARCHAR(100), IN `_total` INT(10))   BEGIN

INSERT INTO factura (usuario, producto, total)
VALUES (_usuario, _producto, _total);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_eliminar_factura` (IN `_ID` INT)   BEGIN

DELETE FROM factura WHERE ID = _ID;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_listar_id` (IN `_ID` INT)   BEGIN

SELECT usuario,producto,total FROM factura WHERE ID = _ID;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_modificar_factura` (IN `_ID` INT, IN `_usuario` VARCHAR(100), IN `_producto` VARCHAR(100), IN `_total` INT(10))   BEGIN

UPDATE factura SET usuario = _usuario,
producto = _producto,
total = _total WHERE ID = _ID;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_mostrar_factura` ()   BEGIN

SELECT * FROM factura;

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `ID` int NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `producto` varchar(100) NOT NULL,
  `total` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`ID`, `usuario`, `producto`, `total`) VALUES
(1, 'juan sebastian', 'gaseos coca cola', 4000),
(2, 'julio', 'pan', 200),
(3, 'maria', 'queso', 8000),
(4, 'luis', 'silla', 40000),
(5, 'juan pablo', 'lapiz', 1000),
(6, 'paulina', 'fresas', 6000),
(8, 'lisandro', 'maleta', 30000),
(9, 'mariana', 'libro', 25000);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
