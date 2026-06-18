const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));

const produtos = [
  { id: 1, nome: "Shampoo", preco: 19.90 },
  { id: 2, nome: "Condicionador", preco: 22.90 },
  { id: 3, nome: "Hidratante", preco: 29.90 }
];

app.get("/", (req, res) => {
  res.sendFile(require("path").join(__dirname, "../public/index.html"));
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    projeto: "Projeto DevOps N3"
  });
});

app.get("/api/produtos", (req, res) => {
  res.json(produtos);
});

module.exports = app;
