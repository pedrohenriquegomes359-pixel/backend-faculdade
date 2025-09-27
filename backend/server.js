const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos da raiz do projeto
app.use(express.static(path.join(__dirname, "..")));

// Rota padrão que entrega o index.html da raiz
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});