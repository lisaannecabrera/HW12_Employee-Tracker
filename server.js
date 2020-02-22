"use strict";

const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "shaboom1",
  database: "employee_trackerDB"
});

connection.connect(err => {
  if (err) throw err;
  prompt();
});

function prompt() {
  inquirer.prompt([
    {
      name: "start",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all employees by department",
        "View all employees by manager",
        "Add employee",
        "Remove employee",
        "Update employee",
        "Update employee role",
        "Update employee manager",
        "End"
      ]
    }.then(answer => {
      switch (answer.start) {
        case "POST":
      }
    })
  ]);
}
