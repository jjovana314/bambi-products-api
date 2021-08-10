import * as mongoose from 'mongoose';


export const ImagesSchema = new mongoose.Schema({
    id: String,
    imageName: String
});