-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 25, 2023 at 03:43 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `devsfood`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL,
  `user_id` int(11) UNSIGNED NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `neighborhood` int(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categorys`
--

CREATE TABLE `categorys` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categorys`
--

INSERT INTO `categorys` (`id`, `name`, `image`) VALUES
(1, 'Tortas', 'https://api.b7web.com.br/devsfood/media/categories/pie.png'),
(2, 'Donuts', 'https://api.b7web.com.br/devsfood/media/categories/donut.png'),
(3, 'Cookies', 'https://api.b7web.com.br/devsfood/media/categories/cookies.png');

-- --------------------------------------------------------

--
-- Table structure for table `productcategorys`
--

CREATE TABLE `productcategorys` (
  `id` int(11) UNSIGNED NOT NULL,
  `product_id` int(11) UNSIGNED DEFAULT NULL,
  `category_id` int(11) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productcategorys`
--

INSERT INTO `productcategorys` (`id`, `product_id`, `category_id`) VALUES
(1, 1, 1),
(2, 3, 1),
(3, 2, 2),
(4, 4, 2);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) UNSIGNED NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `ingredients` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `image`, `name`, `price`, `ingredients`) VALUES
(1, 'https://api.b7web.com.br/devsfood/media/products/tortachocolate.jpg', 'Torta de Chocolate', '93.00', 'Chocolate, farinha, ovo'),
(2, 'https://api.b7web.com.br/devsfood/media/products/donutflocos.jpg', 'Donut de flocos', '1.20', 'Frango, sal, ovo'),
(3, 'https://api.b7web.com.br/devsfood/media/products/tortamorango.jpg', 'Torta de Morango', '128.12', 'Morango, farinha, ovo'),
(4, 'https://api.b7web.com.br/devsfood/media/products/donutchocolate.jpg', 'Donut de chocolate', '1.50', 'Chocolate, frango, sal');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `token_expires_at` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `token`, `token_expires_at`, `created_at`, `updated_at`) VALUES
(1, 'Renan Gustavo', 'renangustavo7429@gmail.com', '$2y$10$CzAelH5fAnfOmomcDNHfZeCuBA1BuPOpNQlEuuJXqmfG1X4vIoeYi', '08d5a87cbad31e2d0f9a454cff05eec6', '2023-01-30', '2022-12-31 03:20:58', '2023-01-23 17:51:41'),
(2, 'Renan Gustavo', 'renandevfullstack@gmail.com', '$2y$10$Ww6ntFV9QG9/4NXr6OG3XeVxkmWCRqbEai6a6.9pXuHSuluOiPi3i', '4b0f42dfaf63dc9ec6793f874e21e536', '2023-01-30', '2022-12-30 23:22:59', '2023-01-23 20:24:36'),
(3, 'Renan Gostozo', 'renandevfullstac2k@gmail.com', '$2y$10$AbaoCTQTSfOam/SBhCPXHuvVklW.1g0bYApWvVk45/ilXStHRsMgu', 'd31972a9ebc55bb142d559f44de77fe3', '2023-01-30', '2023-01-23 20:25:59', '2023-01-23 20:25:59'),
(4, 'Teste', 'teste@gmail.com', '$2y$10$NLDAnT1IuHG5G4l6ytjDP.0VKSNFMoQR5X1v0tUo6.pGL8eiqZjGy', '02c2091189617c3932d5d10fc9b9880c', '2023-02-01', '2023-01-23 20:26:42', '2023-01-25 14:37:30'),
(5, 'Renan Gostozo2', 'renandevfullstaddc2k@gmail.com', '$2y$10$U.UqGLJhCrh95zkub7MBmesGGtttFyKqfMp02LpAGPBn.ovTFqZXa', '4361f4d4839441067b08c33fc67f5692', '2023-02-01', '2023-01-25 12:58:48', '2023-01-25 12:58:48'),
(6, 'Gostozo2', 'renandevfullstaddc2kss@gmail.com', '$2y$10$QC7ogMYPJzNApdAMxDKwTOtyaci5OXn/6QT2SJACz7bRtIvzm2tsa', '40aa3db2d9184013b0dd6c12cfd4d616', '2023-02-01', '2023-01-25 13:04:27', '2023-01-25 13:04:27'),
(7, 'Gostozo2', 'renandevfullstad22dc2kss@gmail.com', '$2y$10$qEBgzek2488MqFFhdPf0IOg3XUUskeSUIGMypvW448//Sk2MOvKWS', '01c69c734d27a3bfb0d035e833c19276', '2023-02-01', '2023-01-25 13:06:01', '2023-01-25 13:06:01'),
(8, 'Gostozo2', 'renandevfullstad2222dc2kss@gmail.com', '$2y$10$Huduh/a1vn5.4lULbiArfuXZDeB/reI6RlK2PI3C.racRGYOK6Lc6', '972b634dd69e54e29915c1083203c6d1', '2023-02-01', '2023-01-25 13:08:02', '2023-01-25 13:08:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productcategorys`
--
ALTER TABLE `productcategorys`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `productcategorys`
--
ALTER TABLE `productcategorys`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `productcategorys`
--
ALTER TABLE `productcategorys`
  ADD CONSTRAINT `productcategorys_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `productcategorys_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categorys` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
