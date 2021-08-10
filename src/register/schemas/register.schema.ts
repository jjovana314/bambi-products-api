import * as mongoose from 'mongoose';


// database schema
export const RegisterSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    username: String,
    password: String,
    email: String
});