// 2058499 Task Planner

let http = require("http");
let fs = require("fs");
let tasks = JSON.parse(fs.readFileSync("./tasks.json").toString());
let PORT = 9090;

let indexPage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>2058499 Task Planner</title>
    </head>
    <body>
        <h1>Task Planner</h1>
        <h2>Add Task</h2>
        <form target="addTask">
            <label for="empId">Employee ID: </label>
            <input type="text" name="empId">
            <label for="taskId">Task ID: </label>
            <input type="text" name="taskId">
            <label for="task">Task: </label>
            <input type="text" name="task">
            <label for="deadline">Deadline</label>
            <input type="text" name="deadline">
            <input type="submit" value="Add Task">
        </form>
        <br><hr>
        <h2>Delete Task</h2>
        <form action="deleteTask">
            <label for="delTask">Task ID</label>
            <input type="text" name="delTask">
            <input type="submit" value="Delete Task">
        </form>
        <br><hr>
        <h2>List Task</h2>
        <form action="listTasks">
            <input type="submit" value="List All Tasks">
        </form>
    </body>
    </html>
`;

let server = http.createServer((request, response) => {
    response.end();
});
server.listen(PORT, () => console.log("Server is running on port " + PORT));
