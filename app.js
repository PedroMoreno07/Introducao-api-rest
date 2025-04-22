import express from "express";
import usuarioRoutes from "./routes/usuarios.js";
import fornecedoresRoutes from "./routes/fornecedor.js";

const app = express();
app.use(express.json());
app.use("/usuarios", usuarioRoutes);
app.use("/fornecedores", fornecedoresRoutes);
const port = 3000;
app.get("/", (req, res) => {
  res.send("Bem vindo a minha API!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
