DROP DATABASE IF EXISTS employee_trackerDB
CREATE DATABASE employee_trackerDB

USE employee_trackerDB

CREATE TABLE department(
    id INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL,
    department_id INTEGER,


);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INTEGER NOT NULL, 
    PRIMARY KEY(id)
)