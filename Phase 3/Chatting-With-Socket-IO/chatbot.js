let PORT = 9090;
let IP = "localhost";
let rootDir = "/";

// load the express module
let express = require("express");

// instantiate express
let app = express();

// Middleware
app.use(express.static("public")); // to serve static files such as images, CSS, and JavaScript

// load the http module and connect with express using the Server property
let http = require("http").Server(app);

// load the socket.io module and connect to the http using IIFE
let io = require("socket.io")(http);

io.on("connection", (socket) => {
    console.log("Client connected");
    // receive the message from client application
    socket.on("clientQuery", (msg) => {
        console.log(msg);

        // send reply back to client
        socket.emit("serverResponse", "Server received the message!");
    });
});

// run the server using http module, not the express module
http.listen(PORT, () => console.log(`On Google Chrome, use this URL http://${IP}:${PORT}${rootDir}`));
