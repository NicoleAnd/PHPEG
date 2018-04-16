/*
SQLyog Ultimate v11.27 (32 bit)
MySQL - 5.0.90-community-nt : Database - study02
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`study02` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `study02`;

/*Table structure for table `xuexizhuangtai` */

DROP TABLE IF EXISTS `xuexizhuangtai`;

CREATE TABLE `xuexizhuangtai` (
  `timu1` varchar(100) character set utf8 collate utf8_unicode_ci default NULL,
  `timu2` varchar(100) character set utf8 collate utf8_unicode_ci default NULL,
  `timu3` varchar(100) character set utf8 collate utf8_unicode_ci default NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `xuexizhuangtai` */

insert  into `xuexizhuangtai`(`timu1`,`timu2`,`timu3`) values ('比较明白','刚好','能听明白，但自己敲代码还是生疏'),('一般','刚好','今晚有事不上课'),('非常明白','快点','能学会，太简单了'),('跳楼','快点','反正也不会，随便啦'),('懵逼','慢点','怕是没天赋学着东西'),('是要跳楼','慢点','都要跳楼了，赶紧慢一点吧');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
