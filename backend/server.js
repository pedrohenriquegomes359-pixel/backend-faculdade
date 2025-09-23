// Importa o express
const express = require('express');
const app = express();

// Rota principal (quando abrir no navegador)
app.get('/', (req, res) => {
  res.send('Backend funcionando! 🚀');
});

// Define a porta (3000)
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});