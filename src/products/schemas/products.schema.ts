import * as mongoose from 'mongoose';
import { ForeignNamesSchema } from './foreignNames.schema';
import { ProductClassSchema } from './productClass.schema';
import { ThumbnailSchema } from './thumbnail.schema';
import { ImagesSchema } from './images.schema';
import { CustomAttributesSchema } from './customAttributes.schema';
import { LogisticsDataSchema } from './logisticsData.schema';


export const ProductsSchema = new mongoose.Schema({
    id: String,
    productCode: String,
    productName: String,
    foreignNames: [ForeignNamesSchema],
    productClass: ProductClassSchema,
    active: Boolean,
    thumbnail: ThumbnailSchema,
    images: [ImagesSchema],
    unit: String,
    eANCode: String,
    eANPackageCode: String,
    logisticData: [LogisticsDataSchema],
    tags: [String],
    customAttributes: [CustomAttributesSchema],
    likes: Number,
    description: String
});