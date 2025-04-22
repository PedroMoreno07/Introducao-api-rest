import express, { Router } from "express";

const router = express.Router();

const fornecedores = [
  { id: 1, nome: "ExtraPrint" },
  { id: 2, nome: "PMenosLab" },
];

router.get("/", (req, res) => {
  res.status(200).json(fornecedores);
});

export default router;
