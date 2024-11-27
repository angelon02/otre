const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Connessione al database MongoDB
mongoose.connect('mongodb://localhost:27017/tuo_database', { useNewUrlParser: true, useUnifiedTopology: true });

// Configurazione delle rotte
const router = require('./routes/api');

// Middleware
app.use(cors());
app.use(express.json());

// Usa il router per le rotte API
app.use('/api', router);

// Connessione al database e avvio dell'app
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connesso al db');
  app.listen(3000, () => {
    console.log('App in ascolto sulla porta 3000');
  });
});

db.on('error', console.error.bind(console, 'Errore di connessione al db:'));
