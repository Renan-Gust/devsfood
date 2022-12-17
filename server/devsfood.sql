-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 17-Dez-2022 às 20:00
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 7.4.29

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
-- Estrutura da tabela `categorys`
--

CREATE TABLE `categorys` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `categorys`
--

INSERT INTO `categorys` (`id`, `name`, `image`) VALUES
(1, 'Tortas', 'https://api.b7web.com.br/devsfood/media/categories/pie.png'),
(2, 'Donuts', 'https://api.b7web.com.br/devsfood/media/categories/donut.png'),
(3, 'Cookies', 'https://api.b7web.com.br/devsfood/media/categories/cookies.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `productcategorys`
--

CREATE TABLE `productcategorys` (
  `id` int(11) UNSIGNED NOT NULL,
  `product_id` int(11) UNSIGNED DEFAULT NULL,
  `category_id` int(11) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `products`
--

INSERT INTO `products` (`id`, `image`, `name`, `price`, `ingredients`) VALUES
(1, 'https://api.b7web.com.br/devsfood/media/products/tortachocolate.jpg', 'Torta de Chocolate', '93.00', 'Chocolate, farinha, ovo'),
(2, 'https://api.b7web.com.br/devsfood/media/products/donutflocos.jpg', 'Donut de flocos', '1.20', 'Frango, sal, ovo'),
(3, 'https://api.b7web.com.br/devsfood/media/products/tortamorango.jpg', 'Torta de Morango', '128.12', 'Morango, farinha, ovo'),
(4, 'https://api.b7web.com.br/devsfood/media/products/donutchocolate.jpg', 'Donut de chocolate', '1.50', 'Chocolate, frango, sal');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
-- Restrições para despejos de tabelas
--

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
