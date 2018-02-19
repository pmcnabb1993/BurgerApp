CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar (100) NOT NULL,
	devoured BOOL NOT NULL default 0,
	PRIMARY KEY (id)
);
