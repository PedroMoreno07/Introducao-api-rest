import express, { Router } from "express";

const router = express.Router();

const produtos = [
  { id: 1, nome: "mouse", preco: 50 },
  { id: 2, nome: "teclado", preco: 90 },
  { id: 3, nome: "headphone", preco: 120 },
];
router.get("/produtos", (req, res) => {
  res.status(200).json(produtos);
});
router.post("/adicionarProdutos", (req, res) => {
  const { nome, preco } = req.body;
  const novoProduto = {
    id: produtos[produtos.length - 1].id + 1,
    nome: nome,
    preco: preco,
  };
  produtos.push(novoProduto);
  res.status(201).json(produtos);
});
router.put("/produtos/:id", (req, res) => {
  const { id } = req.params;
  const { novoNome, novoPreco } = req.body;

  const indice = produtos.findIndex((produto) => {
    return produto.id == id;
  });
  if (indice === -1) {
    return res.status(404).json({ mensagem: "produto não encontrado!" });
  }

  produtos[indice].nome = novoNome;
  produtos[indice].preco = novoPreco;

  res.send(produtos);
});
router.delete("/produtos/:id", (req, res) => {
  //const id = req.params.id
  const { id } = req.params;

  const index = produtos.findIndex((produto) => {
    return produto.id == parseInt(id);
  });

  if (index === -1) {
    res.status(404).json({ mensagem: "Produto não encontrado!" });
  } else {
    produtos.splice(index, 1);
    res.send(produtos);
  }
});

export default router;
