DROP DATABASE IF EXISTS foodDB;
CREATE DATABASE foodDB;

USE foodDB;

CREATE TABLE foods (
	id INT AUTO_INCREMENT NOT NULL,
	restaurant varchar(255) NOT NULL,
	foodItem varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);