import * as mongoose from 'mongoose';


// database schema
export const ProductClassSchema = new mongoose.Schema({
    id: String,
    title: String
});