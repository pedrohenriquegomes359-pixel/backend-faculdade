const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Diz pro Express servir os arquivos da pasta "codigo"
app.use(express.static(path.join(__dirname, "codigo")));

// Rota principal -> abre seu index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "codigo", "index.html"));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});