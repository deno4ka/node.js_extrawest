DROP SCHEMA IF EXISTS `node_js`;
CREATE SCHEMA `node_js`;

use `node_js`;
SET FOREIGN_KEY_CHECKS = 0;

# DROP TABLE IF EXISTS `user`;
# CREATE TABLE `user` (
#     `id` int(11) NOT NULL AUTO_INCREMENT,
#     `name` varchar(32) DEFAULT NULL,
#     `user_name` varchar(32) DEFAULT NULL,
#     `email` varchar(64) DEFAULT NULL,
#     `phone` varchar(32) DEFAULT NULL,
#     `website` varchar(64) DEFAULT NULL,
#     PRIMARY KEY (`id`)
# ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(128) DEFAULT NULL,
    `body` varchar(1024) DEFAULT NULL,
    `user_id` int(11) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(128) DEFAULT NULL,
    `email` varchar(64) DEFAULT NULL,
    `body` varchar(1024) DEFAULT NULL,
    `post_id` int NOT NULL,
    PRIMARY KEY (`id`),

    KEY `FK_POST_idx` (`post_id`),
    CONSTRAINT `FK_POST` FOREIGN KEY (`post_id`)
    REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


SET FOREIGN_KEY_CHECKS = 1;

# INSERT INTO `user` (`name`, `user_name`, `email`, `phone`, `website`) VALUES ('Den', 'deno4ka', 'deno4ka@gmail.com', '+380632396790', 'https://deno4ka.com');
# INSERT INTO `user` (`name`, `user_name`, `email`, `phone`, `website`) VALUES ('Helena', 'lyocik', 'lyocik@gmail.com', '+380938943550', 'https://lyocik.com');

# INSERT INTO `posts` (`title`, `body`, `user_id`) VALUES ('Post #1', 'comment #1', 1);
# INSERT INTO `posts` (`title`, `body`, `user_id`) VALUES ('Post #2', 'comment #2', 1);
# INSERT INTO `posts` (`title`, `body`, `user_id`) VALUES ('Post #3', 'comment #3', 1);
# INSERT INTO `posts` (`title`, `body`, `user_id`) VALUES ('Post #4', 'comment #4', 2);
# INSERT INTO `posts` (`title`, `body`, `user_id`) VALUES ('Post #5', 'comment #5', 2);
# INSERT INTO `posts` (`title`, `body`, `user_id`) VALUES ('Post #6', 'comment #6', 2);
#
# INSERT INTO `comments` (`name`, `email`, `body`, `post_id`) VALUES ('Den', 'deno4ka@gmail.com', 'Comment body #1', 1);
# INSERT INTO `comments` (`name`, `email`, `body`, `post_id`) VALUES ('Helena', 'lyocik@gmail.com', 'Comment body #2', 1);
# INSERT INTO `comments` (`name`, `email`, `body`, `post_id`) VALUES ('Den', 'deno4ka@gmail.com', 'Comment body #3', 2);
# INSERT INTO `comments` (`name`, `email`, `body`, `post_id`) VALUES ('Helena', 'lyocik@gmail.com', 'Comment body #4', 2);
