CREATE TABLE ToDoListUser (
id VARCHAR(64) PRIMARY KEY, 
name VARCHAR(64) NOT NULL, 
nickname VARCHAR(64)  NOT NULL, 
email VARCHAR(64)  NOT NULL
);

CREATE TABLE ToDoListTasks (
id VARCHAR(64) PRIMARY KEY, 
title VARCHAR(64) NOT NULL, 
description VARCHAR(1024) DEFAULT "No description provider", 
deadline DATE,
status ENUM("TO_DO, "DOING", "DONE") DEFAULT "TO_DO",
author_id VARCHAR(64),
FOREIGN KEY (author_id REFERENCES ToDoListUser)
);

CRATE TABLE ToDoListAssignees (
task_id VARCHAR(64),
assignee_id VARCHAR(64),
PRIMARY KEY (taslk_id, assignee_id),
FOREIGN KEY (task_id) REFERENCES ToDoListTasks(id),
FOREIGN KEY (assignees_id) REFERENCES ToDoListUser(id)
)
