const express = require("express");
const app = express();

app.use(express.json());

// Le tue rotte API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Ciao dal backend!" });
});

// Avvia il server solo se non è importato come modulo
if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
  });
}

// Esporta l'app come handler per le funzioni serverless
module.exports = app;
