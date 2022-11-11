import receitas from "../models/Receita.js";

class ReceitaController{
    static listarReceitas = (req, res) =>{
        receitas.find((err, receitas)=>{
            if(!err){
                res.status(200).json(receitas);
            }else{
                res.status(400).send({mensagem: err.message});
            }
        });
    };

    static listarReceitasId = (req, res) =>{
        const id = req.params.id;
        receitas.findById(id, (err, receita)=>{
            if(!err){
                res.status(200).json(receita);
            }else{
                res.status(400).send({mensagem: err.message});
            }
        })
    };

    static criarReceita = (req, res) =>{
        let receita = new receitas(req.body);
        receita.save(err =>{
            if(err){
                res.status(500).send({message: `${err} - falha ao cadastrar receita`})
            } else{
                res.status(201).json(receita)
            }
        })
    };

    static editarReceita = (req, res) =>{
        const id = req.params.id;
        receitas.findByIdAndUpdate(id, {$set: req.body},(err) =>{
            if(!err){
                res.status(200).send({mensagem: `Receita atualizada com sucesso`})
            }else{
                res.status(500).send({mensagem: err.message})
            }
        })
    }

    static removerReceita = (req, res) =>{
        const id = req.params.id;
        receitas.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({mensagem: `Receita deleteda com sucesso`})
            }else{
                res.status(500).send({mensagem: err.message})
            }
        })
    }

};

export default ReceitaController
