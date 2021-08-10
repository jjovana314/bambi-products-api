import * as mongoose from 'mongoose';

export const ForeignNamesSchema = new mongoose.Schema({
    countryCode: String,
    name: String
});