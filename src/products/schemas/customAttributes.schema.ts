import * as mongoose from 'mongoose';


export const CustomAttributesSchema = new mongoose.Schema({
    key: String,
    prompt: String,
    value: Boolean
});