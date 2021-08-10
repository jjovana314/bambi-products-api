import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductModule } from "src/product/product.module";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { CustomAttributesSchema } from "./schemas/customAttributes.schema";
import { ForeignNamesSchema } from "./schemas/foreignNames.schema";
import { ImagesSchema } from "./schemas/images.schema";
import { LogisticsDataSchema } from "./schemas/logisticsData.schema";
import { ProductClassSchema } from "./schemas/productClass.schema";
import { ProductsSchema } from "./schemas/products.schema";
import { ThumbnailSchema } from "./schemas/thumbnail.schema";


@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Products', schema: ProductsSchema}]),
        MongooseModule.forFeature([{name: 'CustomAttributes', schema: CustomAttributesSchema}]),
        MongooseModule.forFeature([{name: 'ForeignNames', schema: ForeignNamesSchema}]),
        MongooseModule.forFeature([{name: 'Images', schema: ImagesSchema}]),
        MongooseModule.forFeature([{name: 'LogisticsData', schema: LogisticsDataSchema}]),
        MongooseModule.forFeature([{name: 'ProductClassSchema', schema: ProductClassSchema}]),
        MongooseModule.forFeature([{name: 'Thumbnail', schema: ThumbnailSchema}]),
        ProductModule
    ],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {} 