// 2058499 Chatbot

let socket = io(); // instantiate the library
let chatHistory = document.getElementById("chatHistory");
let chatInput = document.getElementById("chatInput");
let username = document.getElementById("username");
let data;

chatInput.addEventListener("keydown", (event) => {
    if (event.code == "Enter") {
        let date = new Date();

        // display the user message immediately to the chat history
        chatHistory.innerHTML +=
            `
            <div class="row">
                <div class="col">
                    <p id="userMsg" class="float-left">
                        <b>${username.value}: </b>${chatInput.value}<br> 
                        ${date.toLocaleTimeString()}
                    </p>
                </div>
            </div>
            `;

        // create the object to store both fields
        data = {
            username : username.value,
            message : chatInput.value
        };

        data = JSON.stringify(data);

        // send data to backend using key-value pair
        socket.emit("clientQuery", data);
        // clear the field
        chatInput.value = "";
        // auto scroll to the bottom
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }
});

socket.on("serverResponse", (msg) => {
    let date = new Date();

    chatHistory.innerHTML +=
        `
        <div class="row">
                <div class="col">
                    <p id="serverMsg" class="float-right">
                        <b>Bot: </b>${msg}<br> 
                        ${date.toLocaleTimeString()}
                    </p>
                </div>
        </div>
        `;
    // auto scroll to the bottom
    chatHistory.scrollTop = chatHistory.scrollHeight;
});
