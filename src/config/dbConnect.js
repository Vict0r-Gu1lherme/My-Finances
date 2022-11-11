import mongoose from "mongoose";

mongoose.connect("mongodb+srv://MyFinances:sKc2E1T6J8TmOk6C@myfinances.uk6ymqe.mongodb.net/My-Finances");

let db = mongoose.connection;

export default db;