/* this is only the example file */
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON `databasename`.* TO 'username'@'localhost';
FLUSH PRIVILEGES;