import mongoose from "mongoose";

const stringDeConexao = ""

mongoose.connect(stringDeConexao);

let db = mongoose.connection;

export default db;