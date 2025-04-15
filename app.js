import express from "express";
const app = express();
app.use(express.json());
const port = 3000;
const usuario = [
  { id: 1, nome: "João", email: "joaodugrau@gmail.com" },
  { id: 2, nome: "Ana", email: "anabanana@gmail.com" },
];
app.get("/", (req, res) => {
  res.send("Bem vindo a minha API!");
});
app.get("/usuarios", (req, res) => {
  res.send(usuario);
});
app.post("/criarUsuario", (req, res) => {
  const { nome } = req.body;
  res.send(nome);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
