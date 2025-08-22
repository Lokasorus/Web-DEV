const fs = require('fs')
const filePath = "F:/PGM/WEBD/Backend/todo/tasks.json";


const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath) // reading file synchronously
      const dataJSON =   dataBuffer.toString(); //datajson different from regular json
      return JSON.parse(dataJSON)
    } catch (error){
        return []
    }
}

const saveTasks = (tasks) => {
   const dataJSON =  JSON.stringify(tasks) //converting to string
   fs.writeFileSync(filePath, dataJSON)
}

const addTask = (task) => {
    // in order to add the task you have to first load the task and laoding will happen in tasks.json
    const tasks = loadTasks() //  array making
    tasks.push({task}) //push task an object so that it would be easier to reference
    saveTasks(tasks)
    console.log("task added", task)

}
const listTasks = () => {
    const tasks = loadTasks()
    tasks.forEach((task, index) => console.log(`${index+1} - ${task.task}`))
}
const removeTask = (tasknumber) => {
    const tasks = loadTasks()
    if(tasknumber <= 0 || tasknumber > tasks.length){
        console.log("Error - Invalid number")
    return;   
    }
    tasks.splice(tasknumber -1, 1)
    saveTasks(tasks)
    console.log(`Task ${tasknumber} removed succesfully`)

}

const command = process.argv[2] // add //The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched. The first element will be execPath. See process.argv0 if access to the original value of argv[0] is needed. The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional command-line arguments.
const argument = process.argv[3] // buy milk 


if(command === 'add'){
    addTask(argument)
}else if(command === 'list'){
    listTasks()
}else if(command === 'remove'){
    removeTask(parseInt(argument))
}else{
    console.log("command not recognised")
}