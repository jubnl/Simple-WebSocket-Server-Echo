const WebSocket = require("ws");
const PORT = 5000;
const wsServer = new WebSocket.Server({
    port: PORT
});

wsServer.on('connection', function (socket) {
    console.log("A client just connected");

    // Attach some behavior to the incomming socket
    socket.on("message", function (msg) {
        console.log("Received message from client : " + msg);

        // websocket echo
        // socket.send(msg);

        // websocket broadcast echo
        wsServer.clients.forEach(function (client){
            client.send("Someone said : " + msg);
        });
    });
});

wsServer.on("close", function (){
    console.log("Disconnected !");
});

console.log((new Date()) + " Server is listening on port " + PORT);