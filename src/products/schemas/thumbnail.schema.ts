import * as mongoose from 'mongoose';


export const ThumbnailSchema = new mongoose.Schema({
    id: String,
    imageName: String
});