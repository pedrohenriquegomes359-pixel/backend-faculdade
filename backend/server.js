const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Servir os arquivos estáticos da pasta backend
app.use(express.static(__dirname));

// Rota padrão
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
