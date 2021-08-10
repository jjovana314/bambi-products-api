import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { ProductsDto } from "./products.interface.dto";


export class ProductsArrayDto {
    @ValidateNested({ each: true })
    @Type(() => ProductsDto)
    products: ProductsDto[];
}