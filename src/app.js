import express from "express";
import db from "./config/dbConnect.js";
import routes from './routes/index.js'


db.on('error', console.log.bind(console, 'Erro na conexão com o banco de dados!'));
db.once('open', ()=>{
    console.log('Conexão com banco de dados feita!')
})

const app = express();
app.use(express.json());
routes(app)

export default app;