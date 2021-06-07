DROP TABLE IF EXISTS `videoGame`;
CREATE TABLE `videoGame` (
`id` int NOT NULL AUTO_INCREMENT,
`name` VARCHAR(255) NOT NULL,
`year` YEAR ,
PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO `videoGame` (name, year)
VALUES ('Counter-strik 1.6', 2000), ('fifa 2004', 2004), ('Max Payne', 2001);