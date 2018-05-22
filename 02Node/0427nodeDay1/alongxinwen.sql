CREATE DATABASE /*!32312 IF NOT EXISTS*/`alongxinwen` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `alongxinwen`;

/*Table structure for table `xinwen` */

DROP TABLE IF EXISTS `xinwen`;

CREATE TABLE `xinwen` (
  `id` int(11) NOT NULL auto_increment,
  `biaoti` varchar(100) collate utf8_unicode_ci default NULL,
  `neirong` longtext collate utf8_unicode_ci,
  `riqi` date default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;



