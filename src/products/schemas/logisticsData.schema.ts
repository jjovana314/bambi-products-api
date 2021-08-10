import * as mongoose from 'mongoose';


export const LogisticsDataSchema = new mongoose.Schema({
    key: String,
    prompt: String,
    value: Number
});