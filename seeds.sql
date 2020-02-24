INSERT into department VALUES ("Management");
INSERT into department VALUES ("Coaching");
INSERT into department VALUES ("Players");
INSERT into department VALUES ("Everyone Else");


INSERT into role (title, salary, department_id) VALUES ("General Manager", 250000, 1);
INSERT into role (title, salary, department_id) VALUES ("Head coach", 200000, 2);
INSERT into role (title, salary, department_id) VALUES ("Assistant coach", 100000, 3);
INSERT into role (title, salary, department_id) VALUES ("Trainer", 100000, 3);
INSERT into role (title, salary, department_id) VALUES ("Player" 350000, 4);
INSERT into role (title, salary, department_id) VALUES ("Waterboy", 75000, 5);

--MANAGEMENT
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Lisa", "Carrol", 1, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Matt", "Flannery", 2, null );
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Sarah", "Baran", 1, 1);

--COACHING
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Coach", "K", 5, null );
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Coach", "Jackson", 6, null);

--PLAYERS
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Serena", "Williams", 7, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Venus", "williams", 7, null);

--EVERYONE ELSE
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Adam", "Sandler", 4, null)
