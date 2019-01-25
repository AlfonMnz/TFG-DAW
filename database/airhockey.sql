-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 21-06-2018 a las 08:12:45
-- Versión del servidor: 10.1.30-MariaDB
-- Versión de PHP: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `airhockey`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aerolinea`
--

CREATE TABLE `aerolinea` (
  `idAerolinea` int(11) NOT NULL,
  `nombreAerolinea` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `aerolinea`
--

INSERT INTO `aerolinea` (`idAerolinea`, `nombreAerolinea`) VALUES
(1, 'FlyPendo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Avion`
--

CREATE TABLE `Avion` (
  `idAvion` int(11) NOT NULL,
  `Asientos` int(50) NOT NULL,
  `idAerolinea` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Avion`
--

INSERT INTO `Avion` (`idAvion`, `Asientos`, `idAerolinea`) VALUES
(1, 17, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Billete`
--

CREATE TABLE `Billete` (
  `idBillete` int(11) NOT NULL,
  `FechaSalida` date NOT NULL,
  `FechaLlegada` date NOT NULL,
  `Asiento` int(11) NOT NULL,
  `Precio` int(11) NOT NULL,
  `idVuelo` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuarios`
--

CREATE TABLE `Usuarios` (
  `idUsuario` int(11) NOT NULL,
  `nombreUsuario` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `avatar` blob,
  `supervisor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Usuarios`
--

INSERT INTO `Usuarios` (`idUsuario`, `nombreUsuario`, `password`, `email`, `avatar`, `supervisor`) VALUES
(1, 'Alfonso', 'alfonso', 'alfonmusan14@gmail.com', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Vuelo`
--

CREATE TABLE `Vuelo` (
  `idVuelo` int(11) NOT NULL,
  `Origen` varchar(45) NOT NULL,
  `Destino` varchar(45) NOT NULL,
  `HoraSalida` date NOT NULL,
  `HoraLlegada` date NOT NULL,
  `idAvion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aerolinea`
--
ALTER TABLE `aerolinea`
  ADD PRIMARY KEY (`idAerolinea`);

--
-- Indices de la tabla `Avion`
--
ALTER TABLE `Avion`
  ADD PRIMARY KEY (`idAvion`),
  ADD KEY `idAerolinea` (`idAerolinea`);

--
-- Indices de la tabla `Billete`
--
ALTER TABLE `Billete`
  ADD PRIMARY KEY (`idBillete`),
  ADD KEY `idVuelo` (`idVuelo`);

--
-- Indices de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- Indices de la tabla `Vuelo`
--
ALTER TABLE `Vuelo`
  ADD PRIMARY KEY (`idVuelo`),
  ADD KEY `idAvion` (`idAvion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aerolinea`
--
ALTER TABLE `aerolinea`
  MODIFY `idAerolinea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Avion`
--
ALTER TABLE `Avion`
  MODIFY `idAvion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Billete`
--
ALTER TABLE `Billete`
  MODIFY `idBillete` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Vuelo`
--
ALTER TABLE `Vuelo`
  MODIFY `idVuelo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Avion`
--
ALTER TABLE `Avion`
  ADD CONSTRAINT `Avion_ibfk_1` FOREIGN KEY (`idAerolinea`) REFERENCES `aerolinea` (`idAerolinea`);

--
-- Filtros para la tabla `Billete`
--
ALTER TABLE `Billete`
  ADD CONSTRAINT `Billete_ibfk_1` FOREIGN KEY (`idVuelo`) REFERENCES `Vuelo` (`idVuelo`);

--
-- Filtros para la tabla `Vuelo`
--
ALTER TABLE `Vuelo`
  ADD CONSTRAINT `Vuelo_ibfk_1` FOREIGN KEY (`idAvion`) REFERENCES `Avion` (`idAvion`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
