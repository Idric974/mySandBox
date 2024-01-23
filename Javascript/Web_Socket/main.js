console.log("Hello");
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 5500 });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
  });

  ws.send("message du serveur", function () {
    // Fermer la connexion après l'envoi du message
    ws.close();
  });
});
