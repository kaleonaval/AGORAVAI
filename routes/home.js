const express = require('express');
const router = express.Router();

// Defina suas rotas aqui
router.get('/', (req, res) => {
  res.send('Página inicial');
});

module.exports = router;
