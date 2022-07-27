// On instancie express
const express = require('express');
const app = express();

// Pour l’installation des informations sensibles.
require('dotenv').config();

// On appel Socket.io
const { Server } = require('socket.io');

// On crée le serveur http
const http = require('http');

// Création du serveur
const server = http.createServer(app);

// Instanciation de SocketIo
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// Utilisation de cors pour les connexions
const cors = require('cors');
app.use(cors());

// Header pour les Cross Origine
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

// Utilisation de body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// On écoute l'évènement "connection" de socket.io
io.on('connection', (socket) => {
  console.log(
    '\x1b[35m',
    "[ SOCKET IO   ] Le serveur Socket.io est connecté avec l'id : ",
    socket.id
  );

  socket.on('disconnect', () => {
    console.log(
      '\x1b[35m',
      "[ SOCKET IO   ] Le serveur Socket.io est déconnecté avec l'id : ",
      socket.id
    );
  });

  // Gestion des écoutes----------------------------------------

  // Mesure de la température
  socket.on('tmpAir', function (arg) {
    console.log(
      '\x1b[35m',
      '[ SOCKET IO ] Température Air | reçue du client: ',
      arg
    );
    socket.broadcast.emit('tmpAir', arg);
  });

  // Mesure du taux d'humidité
  socket.on('tmpHum', function (arg) {
    console.log(
      '\x1b[35m',
      '[ SOCKET IO ]  Taux Humidité   | reçue du client: ',
      arg
    );
    socket.broadcast.emit('tmpHum', arg);
  });

  // Mesure du taux CO2
  socket.on('txCO2', function (arg) {
    console.log(
      '\x1b[35m',
      '[ SOCKET IO ]  CO2             | reçue du client: ',
      arg
    );
    socket.broadcast.emit('txCO2', arg);
  });

  // FIN Gestion des écoutes----------------------------------------
});

// Importation des routeurs.
// const etalonnageRoutes = require('./routes/etalonnage');
// const mesurerTemperatureRoutes = require('./routes/temperature');
// const moduleOnRoutes = require('./routes/moduleOn');
// const moduleOffRoutes = require('./routes/moduleOff');
// const mesuresRoutes = require('./routes/mesures');

// Liste des routes.
// app.use('/api/etalonnage', etalonnageRoutes);
// app.use('/api/mesurerTemperature', mesurerTemperatureRoutes);
// app.use('/api/moduleOn', moduleOnRoutes);
// app.use('/api/moduleOff', moduleOffRoutes);
// app.use('/api/mesures', mesuresRoutes);
//****************************************** */

// On va demander au serveur http de répondre sur le port 3001.
port = 3001;
server.listen(port, () => {
  console.log(
    '\x1b[32m',
    '[ NODE SERVER ] Le serveur est démarré sur le port -------- : ',
    port
  );
});
