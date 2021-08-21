import * as mongoose from 'mongoose';


// database schema
export const LoginSchema = new mongoose.Schema({
    username: String,
    password: String,
    token: String
});