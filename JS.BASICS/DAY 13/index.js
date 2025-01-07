const socket = new WebSocket("ws://localhost:3000");
socket.onopen = () => {
    console.log("WebSocket connection opened")};
    socket.send("Hello from the browser!");
    socket.onmessage = (event) => {
        console.log("Message from the server:", event.data);
      };
      socket.onclose = (event) => {
        console.log("WebSocket connection closed");
      };