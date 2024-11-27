// routes/api.js
const express = require('express');
const router = express.Router();

// Definisci una route di esempio
router.get('/', (req, res) => {
  res.json({ message: 'API funzionante' });
});

module.exports = router;
