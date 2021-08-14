import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductClassController } from "./productClass.controller";
import { ProductClassService } from "./productClass.service";
import { ProductClassSchema } from "./schemas/productClass.schema";


@Module({
    imports: [MongooseModule.forFeature([{name: 'ProductClass', schema: ProductClassSchema}])],
    controllers: [ProductClassController],
    providers: [ProductClassService]
})
export class ProductClassModule {} 