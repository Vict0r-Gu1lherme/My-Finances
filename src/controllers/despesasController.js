import despesas from "../models/Despesa.js";

class DespesaController{
    static listarDespesas = (req, res) =>{
        despesas.find((err, despesas) =>{
            if(!err){
                res.status(200).json(despesas);
            }else{
                res.status(400).send({mensagem: err.message});
            }
        });
    };

    static listarDespesasId = (req, res) =>{
        const id = req.params.id;
        despesas.findById(id, (err, despesa)=>{
            if(!err){
                res.status(200).json(despesa);
            }else{
                res.status(400).send({mensagem: err.message});
            }
        })
    };

    static criarDespesa = (req, res) =>{
        let despesa = new despesas(req.body);
        despesa.save(err =>{
            if(err){
                res.status(500).send({message: `${err} - falha ao cadastrar despesa`})
            } else{
                res.status(201).json(despesa)
            }
        })
    };

    static editarDespesa = (req, res) =>{
        const id = req.params.id;
        despesas.findByIdAndUpdate(id, {$set: req.body},(err) =>{
            if(!err){
                res.status(200).send({mensagem: `despesa atualizada com sucesso`})
            }else{
                res.status(500).send({mensagem: err.message})
            }
        })
    }

    static removerDespesa = (req, res) =>{
        const id = req.params.id;
        despesas.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({mensagem: `despesa deleteda com sucesso`})
            }else{
                res.status(500).send({mensagem: err.message})
            }
        })
    }
}

export default DespesaController;