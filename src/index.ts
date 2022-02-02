import { Request, Response } from "express";
import app from "./app";
import createUser from "./endpoints/createUser"
import getUserById from "./endpoints/getUserById"
import editUser from "./endpoints/editUser"
import createTask from "./endpoints/createTask"
import getTaskById from "./endpoints/getTaskById"

app.put("/user", createUser ) 
app.get("/user/:id", getUserById )
app.post("/user/edit/:id", editUser)

app.put("/task", createTask)
app.get("/task/:id", getTaskById)