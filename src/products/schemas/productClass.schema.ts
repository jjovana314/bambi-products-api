import * as mongoose from 'mongoose';


export const ProductClassSchema = new mongoose.Schema({
    id: String,
    title: String
});