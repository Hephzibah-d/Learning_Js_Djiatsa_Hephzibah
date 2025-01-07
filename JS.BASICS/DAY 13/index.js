const WebSocket = require('ws');


const wss = new WebSocket.Server({ port: 8080 });


wss.on('connection', function connection(ws) {

    console.log('Client connected');


    ws.on('message', function incoming(message) {

        console.log('Received: %s', message);

        ws.send(`${message}`);
    });


    ws.on('close', function () {
        console.log('Client disconnected');
    });
});
// Create a WebSocket object with the server URL
const socket = new WebSocket("ws://localhost:3000");

// Listen to the open event, which indicates the connection is established
socket.onopen = () => {
  console.log("WebSocket connection opened");
  // Send a message to the server
  socket.send("Hello from the browser!");
};

// Listen to the message event, which contains the data received from the server
socket.onmessage = (event) => {
  console.log("Message from the server:", event.data);
};

// Listen to the close event, which indicates the connection is closed
socket.onclose = (event) => {
  console.log("WebSocket connection closed");
};

// Listen to the error event, which indicates there is an error with the connection
socket.onerror = (error) => {
  console.error("WebSocket error:", error);
};