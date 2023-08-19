-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 18, 2023 at 03:42 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dash`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(10) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `file_path`, `description`, `price`, `created_at`, `updated_at`) VALUES
(6, 'minuman', 'product/SJJ39f0n59m3PsBXY66WNocWHtOVX9ZJC6v9Qj67.png', 'seger', 3000, '2023-08-11', '2023-08-15'),
(7, 'games', 'product/NNN61i4QUlogO1X3YXpRr606gP9mgSzKStiJBiTE.png', 'permainan anak', 3000, '2023-08-11', '2023-08-11'),
(8, 'casan', 'product/eUNNEmpoY18x16OjCVmKQjRZg2yjbBTtWGbIqRcc.png', 'cepet pokoknya', 3000, '2023-08-15', '2023-08-15');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'joe', 'jo@mail.com', '$2y$10$Uk9TgDcecr3rvoXWFUY70eblaInHFrt4s6Dl80.xl8upiqyDEWOgq'),
(2, 'joko', 'joy@mail.com', '$2y$10$AwFgRUWnhq0djQKlGeOUA.r0ox9Pv7sjYqTsdPoS9fdKjLIug75Ga'),
(3, 'budy', 'buday@mail.com', '$2y$10$yQZCpc4EkQi65A0eF./9C.5t1ZXKgT10U3Z9KCuKGjWrYfMDvguwG'),
(4, 'ebi', 'bei@mail.com', '$2y$10$2IsiOW2e6bm8i5u5RVhiaOkwpRtooogsJvhWor4b/aFcMjq8QO6VK'),
(5, 'sentot', 'sentot@mail.com', '$2y$10$HeF7llnIj5NPE.VshDuka.jDChkt.6o0saudfbumL1NK9QiJl6Ive'),
(6, 'abi', 'abi@mail.com', '$2y$10$p/Jr4d5RK1QQDqj8ZKmSauIWxYTwH.vmToS/w3umXjKUinjS6KRtO'),
(7, 'jodi', 'jodi@mail.com', '$2y$10$4DbeZMbHpMZ5cZz9g2eXyug6jic9Ob7v3Df9qhS2mfvkjaxJ3vyYq'),
(8, 'xavi', 'xavi@gmaill.com', '$2y$10$ftZhCeege.7S1JjitFitaeOXgS6n8z/c4mGVcyEd/DFe8UwEogZDm'),
(11, 'asep', 'asep@mail.com', '$2y$10$jXfCkVumf0PXM2znGzwQ4.W3Sn4QIVCoGExvawBMlYDobYhuueE.y'),
(12, 'udin', 'udin@mail.com', '$2y$10$xqgJsJj5r6g0iJTHbkBryuhc0n6OTuSC3M2XndrmmUOVcycbb4rX.');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
