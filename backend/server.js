const express = require("express");
const app = express();

app.use(express.json());

// Le tue rotte API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Ciao dal backend!" });
});

// Esporta l'app come handler per le funzioni serverless
module.exports = app;
