CREATE DATABASE IF NOT EXISTS sequelize_burgers_db;
USE sequelize_burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255),
	devoured boolean DEFAULT false,
	PRIMARY KEY (id)
);