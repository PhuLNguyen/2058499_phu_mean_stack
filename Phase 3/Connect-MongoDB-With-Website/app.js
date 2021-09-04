// url database
let url = "mongodb://localhost:27017/Simplilearn";

// load all modules
let express = require("express");
let bodyParser = require("body-parser"); 
let mongoose = require("mongoose");
let routerCourse = require("./router/course.router"); // load the router

// instantiate express
let app = express();

// add middleware
app.use(bodyParser.json()); // to read request body as JSON
app.use(express.static("public"));  // send static files in "public" directory to client
                                    // when type in http://localhost:9090 in the browser

// connect the database
mongoose.connect(url)
    .then(res => console.log("Successfully connected to MongoDB"))
    .catch(err => console.log(err));

// middleware which help to match main path and pass the request to the router file
app.use("/api/course", routerCourse);
// http://localhost:9090/api/course/create     
// http://localhost:9090/api/course/retrieve
// http://localhost:9090/api/course/update
// http://localhost:9090/api/course/delete/1        // '1' is the course ID

// run the server
app.listen(9090, () => console.log("On Google Chrome, use http://localhost:9090"));
