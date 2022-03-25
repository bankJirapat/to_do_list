const fs = require('fs');
let dataString
let msg = '';
const main_todo = async (command, value) => {
    console.log("command : ", command, " value: ", value);
    if (command == "addTodo") {
        await addDataToFileJSON(value)
        // console.log("msg : ",msg)
    } else if (command == "deleteTodo") {
        let TodoDelete = await deleteDataToFileJSON(value)
        msg = TodoDelete ? `${value} was deleted in to do list` : `${value} not found in to do list`
        // console.log("msg : ",msg)
    } else if (command == "readTodo") {
        let todo = await readDataFileJSON(value)
        msg = todo ? `Great! ${value} was found in to do list` : `Sorry! ${value} not found in to do list`
    } else if (command == "listAllTodo") {
        let list = await listAllDataFileJSON()
        msg = await listItem(list)
    } else {
        msg = "Invalid command"
    }

    return msg;
}

// add a todo item in list
const addDataToFileJSON = async (value) => {

    let arrTodo = await fetchData();
    let objTodo = {
        value
    };

    try {

        if (arrTodo.length > 0) {
            // console.log("----- todo-data is not null -----")
            let duplicatetodo = arrTodo.filter((objTodo) => objTodo.value == value)
            // console.log("duplicationtodo : ", duplicatetodo)
            if (duplicatetodo.length == 0) {
                arrTodo.push(objTodo);
                // console.log("arrTodo : ",arrTodo)
                await saveDataInFile(arrTodo)
                msg = `add (${value}) is finished `;
            } else {
                msg = `(${value}) is already listed`
            }

        } else {

            // console.log("----- todo-data is null -----")
            arrTodo.push(objTodo);
            await saveDataInFile(arrTodo)
            msg = `add (${value}) is finished `;
        }
        return msg

    } catch (e) {
        msg = e.message
        console.log("error : ", msg)
        return msg
    }

}

// delete a todo item in list
const deleteDataToFileJSON = async (value) => {

    dataString = await fetchData()
    if (dataString.length > 0) {
        let filterData = dataString.filter((dataString) => dataString.value != value)
        await saveDataInFile(filterData)

        return dataString.length != filterData.length
    } else {
        // console.log("===== No data in file =====")
        return false
    }

}

// read a todo item in list
const readDataFileJSON = async (value) => {

    dataString = await fetchData()
    if (dataString.length > 0) {
        let filteredTodos = dataString.filter((dataString) => dataString.value == value);
        console.log("filteredTodos : ", filteredTodos)
        return filteredTodos[0];
    } else {
        return false
    }
}

// list all a todo item
const listAllDataFileJSON = async () => {
    let arr = await fetchData()
    console.log("listAllDataFileJSON : ", arr)
    let filteredArr = arr.filter(obj => obj.value)

    console.log("array : ", filteredArr)
    return filteredArr
}

const fetchData = async () => {
    let data = fs.readFileSync('todo-data.json')
    console.log("data fetchData : ", data)
    if (data.length > 0) {
        return JSON.parse(data)
    } else {
        return []
    }

}

const saveDataInFile = async (data) => {
    fs.writeFileSync('todo-data.json', JSON.stringify(data));
}

const listItem = async (obj) => {
    let msg = `- TodoList : ${obj.length} List -\r\n`
    let m = ""
    for (let i = 0; i < obj.length; i++) {
        let a = obj[i].value
        m += `+ ${a}\r\n`
    }
    return msg = msg + m
}

const logtodo = (item) => {
    console.log(`- ${item}`)
}
module.exports = {
    main_todo: main_todo
}