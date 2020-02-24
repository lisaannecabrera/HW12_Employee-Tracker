"use strict";

const mysql = require("mysql");
const inquirer = require("inquirer");
const consoletable = require("console.table");
const util = require("util");
// const title = require("asciiart-logo");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "shaboom1",
  database: "employee_trackerDB"
});

connection.connect(err => {
  if (err) throw err;
  connection.query = util.promisfy(connection.query);
  start();
});

function start() {
  inquirer
    .prompt({
      name: "start-list",
      type: "list",
      message: "What do you want to do today?",
      choices: [
        "View All Employees",
        "View all departments",
        "View all roles",
        "Add Employee",
        "Add Department",
        "Add Role",
        "Remove Employee",
        "Update employee role",
        "Log Out"
      ]
    })
    .then(answer => {
      switch (answer.start - list) {
        case "View All Employees":
          viewAll();
          break;
        case "View all Departments":
          viewAllDepartments();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Add department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "remove employee":
          removeEmployee();
          break;
        case "update employee role":
          updateEmployeeRole();
          break;
        default:
          connection.end();
      }
    });
}

function viewAllDepartments() {
  let query = "SELECT * FROM department";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log(res.length + "department exists!");
    start();
  });
}

function viewAllRoles() {
  let query =
    "SELECT * FROM role INNER JOIN department ON role.department_id = department.id";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log(res.length + "role found!");
    console.table("All Roles:", res);
    start();
  });
}

// async function add function
