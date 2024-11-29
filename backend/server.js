const express = require('express');
const cors = require('cors');

const app = express();

// Configurare CORS
const allowedOrigins = ['https://otre.vercel.app'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed'));
    }
  }
}));

// Endpoint API di esempio
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Ciao dal backend!' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
});
