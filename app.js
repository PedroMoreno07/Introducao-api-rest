import express from "express";
const app = express();
app.use(express.json());
const port = 3000;
const usuarios = [
  { id: 1, nome: "João", email: "joaodugrau@gmail.com" },
  { id: 2, nome: "Ana", email: "anabanana@gmail.com" },
];
app.get("/", (req, res) => {
  res.send("Bem vindo a minha API!");
});
app.get("/usuarios", (req, res) => {
  res.status(200).json(usuarios);
});
app.post("/criarUsuario", (req, res) => {
  const { nome, email } = req.body;
  const novoUsuario = {
    id: usuarios[usuarios.length - 1].id + 1,
    nome: nome,
    email: email,
  };
  usuarios.push(novoUsuario);
  res.status(201).json(usuarios);
});

app.put("/usuario/:id", (req, res) => {
  const { id } = req.params;
  const { novoNome, novoEmail } = req.body;

  const indice = usuarios.findIndex((usuario) => {
    return usuario.id == id;
  });
  if (indice === -1) {
    res.status(404);
  }

  usuarios[indice].nome = novoNome;
  usuarios[indice].email = novoEmail;

  res.send(usuarios);
});
app.delete("/usuarios/:id", (req, res) => {
  //const id = req.params.id
  const { id } = req.params;

  const index = usuarios.findIndex((usuario) => {
    return usuario.id == parseInt(id);
  });

  if (index === -1) {
    res.send("Usuário não encontrado!");
  } else {
    usuarios.splice(index, 1);
    res.send(usuarios);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
