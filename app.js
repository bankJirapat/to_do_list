const express = require('express');
const todo = require('./todo.js');
const port = 3000
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

let command = ""

app.post('/addTodo', async (req, res) => {
    command = "addTodo"
    let todo_value = req.body.todo
    console.log("todo : ", todo_value)
    console.log("Running Command: ", command)
    let msg = await todo.main_todo(command, todo_value)
    console.log("Message addTodo  : ", msg)
    res.status(200).send(msg)
})

app.post('/deleteTodo', async (req, res) => {
    command = "deleteTodo"
    let todo_value = req.body.todo
    console.log("todo : ", todo_value)
    console.log("Running Command: ", command)
    let msg = await todo.main_todo(command, todo_value)
    console.log("Message deleteTodo  : ", msg)
    res.status(200).send(msg)
})

app.get('/readTodo', async (req, res) => {
    command = "readTodo"
    let todo_value = req.body.todo
    console.log("todo : ", todo_value)
    console.log("Running Command: ", command)
    let msg = await todo.main_todo(command, todo_value)
    console.log("Message readTodo  : ", msg)
    res.status(200).send(msg)
})

app.get('/listAllTodo', async (req, res) => {
    command = "listAllTodo"
    let todo_value = req.body.todo
    console.log("todo : ", todo_value)
    console.log("Running Command: ", command)
    let msg = await todo.main_todo(command, todo_value)
    console.log("Message addTodo  : ", msg)
    res.status(200).send(msg)
})

app.listen(port)
console.log("Listening on port " + port)