// 2058499 Chatbot

let socket = io(); // instantiate the library
let chatHistory = document.getElementById("chatHistory");
let chatInput = document.getElementById("chatInput");

chatInput.addEventListener("keydown", (event) => {
    if (event.code == "Enter") {
        let date = new Date();

        // display the user message immediately to the chat history
        chatHistory.innerHTML += 
            `<p id="userMsg">${date.toLocaleString()}<br> 
            <b>Me</b>: ${chatInput.value}</p>`;
        // send data to backend using key-value pair
        socket.emit("clientQuery", chatInput.value); 
        // clear the field
        chatInput.value = ""; 
    }
});

socket.on("serverResponse", (msg) => {
    let date = new Date();

    chatHistory.innerHTML += 
        `<p id="serverMsg">${date.toLocaleString()}<br> 
        <b>Alice</b>: ${msg}</p>`;
});
