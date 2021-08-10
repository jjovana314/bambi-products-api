import * as mongoose from 'mongoose';

export const AdminSchema = new mongoose.Schema({
    id: String,
    productCode: String,
    dateAdded: String,
    comment: String,
    visitorNick: String,
    anyContactData: String,
    aproved: Boolean
});