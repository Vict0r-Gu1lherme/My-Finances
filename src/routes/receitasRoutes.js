import Express from "express";
import ReceitaController from "../controllers/receitasController.js";

const router = Express.Router();

router
    .get('/receitas', ReceitaController.listarReceitas)
    .get('/receitas/:id', ReceitaController.listarReceitasId)
    .post('/receitas', ReceitaController.criarReceita)
    .put('/receitas/:id', ReceitaController.editarReceita)
    .delete('/receitas/:id', ReceitaController.removerReceita)
  
export default router 