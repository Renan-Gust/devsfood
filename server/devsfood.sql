-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18-Mar-2023 às 03:06
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `devsfood`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `addresses`
--

CREATE TABLE `addresses` (
  `id` int(11) UNSIGNED NOT NULL,
  `user_id` int(11) UNSIGNED NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `neighborhood` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `addresses`
--

INSERT INTO `addresses` (`id`, `user_id`, `address`, `number`, `neighborhood`, `city`, `state`, `created_at`, `updated_at`) VALUES
(1, 4, 'Rua Santa Luzia', 74, 'Inhaúma', 'Rio de Janeiro', 'RJ', '2023-01-29 18:38:59', '2023-01-29 19:58:45'),
(2, 2, 'Rua santa', 50, 'Inhaúma', 'Rio de Janeiro', 'RJ', '2023-03-18 01:02:12', '2023-03-18 01:02:12');

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorys`
--

CREATE TABLE `categorys` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `categorys`
--

INSERT INTO `categorys` (`id`, `name`, `image`) VALUES
(1, 'Tortas', 'https://api.b7web.com.br/devsfood/media/categories/pie.png'),
(2, 'Donuts', 'https://api.b7web.com.br/devsfood/media/categories/donut.png'),
(3, 'Cookies', 'https://api.b7web.com.br/devsfood/media/categories/cookies.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `orders`
--

CREATE TABLE `orders` (
  `id` int(11) UNSIGNED NOT NULL,
  `user_id` int(11) UNSIGNED NOT NULL,
  `address_id` int(11) UNSIGNED NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `delivery_fee` decimal(10,2) NOT NULL,
  `products` longtext NOT NULL,
  `status` varchar(40) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `address_id`, `total`, `delivery_fee`, `products`, `status`, `created_at`) VALUES
(1, 4, 1, '124.31', '7.99', '', 'delivered', '2023-03-18 01:01:18'),
(2, 4, 1, '30.00', '1.99', '', 'delivered', '2023-03-18 01:01:20'),
(5, 2, 2, '30.00', '1.99', '[{\"name\":\"Torta de Morango\",\"price\":\"128.12\",\"image\":\"https:\\/\\/api.b7web.com.br\\/devsfood\\/media\\/products\\/tortamorango.jpg\",\"ingredients\":\"Morango, farinha, ovo\"},{\"name\":\"Donut de chocolate\",\"price\":\"1.50\",\"image\":\"https:\\/\\/api.b7web.com.br\\/devsfood\\/media\\/products\\/donutchocolate.jpg\",\"ingredients\":\"Chocolate, frango, sal\"}]', 'delivered', '2023-03-18 01:08:37'),
(6, 2, 1, '30.00', '1.99', '[{\"name\":\"Torta de Chocolate\",\"price\":\"93.00\",\"image\":\"https:\\/\\/api.b7web.com.br\\/devsfood\\/media\\/products\\/tortachocolate.jpg\",\"ingredients\":\"Chocolate, farinha, ovo\"}]', 'delivered', '2023-03-18 02:05:38');

-- --------------------------------------------------------

--
-- Estrutura da tabela `productcategorys`
--

CREATE TABLE `productcategorys` (
  `id` int(11) UNSIGNED NOT NULL,
  `product_id` int(11) UNSIGNED DEFAULT NULL,
  `category_id` int(11) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `productcategorys`
--

INSERT INTO `productcategorys` (`id`, `product_id`, `category_id`) VALUES
(1, 1, 1),
(2, 3, 1),
(3, 2, 2),
(4, 4, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `products`
--

CREATE TABLE `products` (
  `id` int(11) UNSIGNED NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `ingredients` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `products`
--

INSERT INTO `products` (`id`, `image`, `name`, `price`, `ingredients`) VALUES
(1, 'https://api.b7web.com.br/devsfood/media/products/tortachocolate.jpg', 'Torta de Chocolate', '93.00', 'Chocolate, farinha, ovo'),
(2, 'https://api.b7web.com.br/devsfood/media/products/donutflocos.jpg', 'Donut de flocos', '1.20', 'Frango, sal, ovo'),
(3, 'https://api.b7web.com.br/devsfood/media/products/tortamorango.jpg', 'Torta de Morango', '128.12', 'Morango, farinha, ovo'),
(4, 'https://api.b7web.com.br/devsfood/media/products/donutchocolate.jpg', 'Donut de chocolate', '1.50', 'Chocolate, frango, sal');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
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
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `token`, `token_expires_at`, `created_at`, `updated_at`) VALUES
(1, 'Renan Gustavo', 'renangustavo7429@gmail.com', '$2y$10$CzAelH5fAnfOmomcDNHfZeCuBA1BuPOpNQlEuuJXqmfG1X4vIoeYi', '08d5a87cbad31e2d0f9a454cff05eec6', '2023-01-30', '2022-12-31 03:20:58', '2023-01-23 17:51:41'),
(2, 'Renan Gustavo', 'renandevfullstack@gmail.com', '$2y$10$Ww6ntFV9QG9/4NXr6OG3XeVxkmWCRqbEai6a6.9pXuHSuluOiPi3i', 'f5ec892fd7fde730dce1f80598c25936', '2023-03-24', '2022-12-30 23:22:59', '2023-03-17 23:54:44'),
(3, 'Renan Gostozo', 'renandevfullstac2k@gmail.com', '$2y$10$AbaoCTQTSfOam/SBhCPXHuvVklW.1g0bYApWvVk45/ilXStHRsMgu', 'd31972a9ebc55bb142d559f44de77fe3', '2023-01-30', '2023-01-23 20:25:59', '2023-01-23 20:25:59'),
(4, 'Teste', 'teste@gmail.com', '$2y$10$NLDAnT1IuHG5G4l6ytjDP.0VKSNFMoQR5X1v0tUo6.pGL8eiqZjGy', '02c2091189617c3932d5d10fc9b9880c', '2023-02-01', '2023-01-23 20:26:42', '2023-01-25 14:37:30'),
(5, 'Renan Gostozo2', 'renandevfullstaddc2k@gmail.com', '$2y$10$U.UqGLJhCrh95zkub7MBmesGGtttFyKqfMp02LpAGPBn.ovTFqZXa', '4361f4d4839441067b08c33fc67f5692', '2023-02-01', '2023-01-25 12:58:48', '2023-01-25 12:58:48'),
(6, 'Gostozo2', 'renandevfullstaddc2kss@gmail.com', '$2y$10$QC7ogMYPJzNApdAMxDKwTOtyaci5OXn/6QT2SJACz7bRtIvzm2tsa', '40aa3db2d9184013b0dd6c12cfd4d616', '2023-02-01', '2023-01-25 13:04:27', '2023-01-25 13:04:27'),
(7, 'Gostozo2', 'renandevfullstad22dc2kss@gmail.com', '$2y$10$qEBgzek2488MqFFhdPf0IOg3XUUskeSUIGMypvW448//Sk2MOvKWS', '01c69c734d27a3bfb0d035e833c19276', '2023-02-01', '2023-01-25 13:06:01', '2023-01-25 13:06:01'),
(8, 'Gostozo2', 'renandevfullstad2222dc2kss@gmail.com', '$2y$10$Huduh/a1vn5.4lULbiArfuXZDeB/reI6RlK2PI3C.racRGYOK6Lc6', '972b634dd69e54e29915c1083203c6d1', '2023-02-01', '2023-01-25 13:08:02', '2023-01-25 13:08:02');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Índices para tabela `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `orders_ibfk_2` (`address_id`);

--
-- Índices para tabela `productcategorys`
--
ALTER TABLE `productcategorys`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Índices para tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `productcategorys`
--
ALTER TABLE `productcategorys`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `productcategorys`
--
ALTER TABLE `productcategorys`
  ADD CONSTRAINT `productcategorys_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `productcategorys_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categorys` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
