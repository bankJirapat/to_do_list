const express = require('express');
const todo = require('./todo.js');
const port = 3000
const app = express()

app.post('/addTodo',async (req,res) => {
    let command = "addTodo"
    console.log("req body : ",req)
    let body = JSON.parse(req.body)
    console.log("body : ", body)
    console.log("Running Command: " , command)
    let msg = await todo.main_todo(command,body.todo)
    console.log("Message addTodo  : " , msg)
    res.status(200).send(msg)
})

app.post('/deleteTodo',(req,res) => {

})

app.get('/readTodo',(req,res) => {

})

app.get('/listAllTodo',(req,res) => {})

app.listen(port)
console.log("Listening on port " + port)