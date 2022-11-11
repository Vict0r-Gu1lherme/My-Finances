import express from "express";
import despesaController from "../controllers/despesasController.js";

const router = express.Router();

router
    .get('/despesas', despesaController.listarDespesas)
    .get('/despesas/:id', despesaController.listarDespesasId)
    .post('/despesas', despesaController.criarDespesa)
    .put('/despesas/:id', despesaController.editarDespesa)
    .delete('/despesas/:id', despesaController.removerDespesa)

export default router;