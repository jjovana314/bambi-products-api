import * as mongoose from 'mongoose';


// database schema
export const ProductSchema = new mongoose.Schema({
    id: String,
    title: String
});