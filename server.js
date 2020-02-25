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

async function addEmployee() {
  try {
    const dpwait = await connection.query("SELECT * FROM department");
    const dpInfo = {
      name: dpInfo.name,
      value: dpInfo.id
    };
    constmgwait = await connection.query(
      "SELECT * FROM employee WHERE manager_id IS NULL"
    );

    const answer = await inquirer.prompt([
      {
        name: "first_name",
        type: "input",
        message: "What's your employee's first name?"
      },
      {
        name: "last_name",
        type: "input",
        message: "What is your employee's last name?"
      },
      {
        name: "role_id",
        type: "list",
        message: "What is the employee's role?"
      },
      {
        name: "mgmt_id",
        type: "list",
        message: "who is the employee's manager?"
      }
    ]);
    await connection.query(
      "INSERT INTO employee SET ?",
      {
        first_name: answer.first_name,
        last_name: answer.last_name,
        role_id: answer.mgmt_id
      },
      err => {
        if (err) throw err;
        console.log("employee added!");
        start();
      }
    );
  } catch (err) {
    console.log(err);
  }
}

async function addDepartment() {
  const answer = await inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "What's your department name?"
    }
  ]);
  await connection.query(
    "INSERT INTO department SET ?",
    { name: answer.name },
    err => {
      if (err) throw err;
      console.log("department added!");
      start();
    }
  );
  if (err) {
    consople.log(err);
  }
}

async function addRole() {
  try {
    const response = await connection.query("SELECT * FROM department");
  }
  const answer = await inquirer.prompt([
    {
      name: "title",
      type: "input",
      message: "What's your role"
    },
    {
      name: "salary",
      type: "input",
      message: "What's your salary?",
      validate: answer => {
        if (!isNaN(answer)) {
          return true;
        } else {
          throw error("Please give a number!");
        }
      }
    },
    {
      name: "dept_id",
      type: "list",
      message: "choose a department",
      choices: "department information"
    }
  ]);
  await connection.query(
    "INSERT INTO role SET ?",
    {
      title: answer.title,
      salary: answer.salary,
      dept_id: answer.dept_id
    },
    err => {
      if (err) throw err;
      console.log("Your department was added!");
      start();
    }
  );
}
