import { ValidateNested } from "class-validator";
import { Type } from 'class-transformer';
import { ForeignNamesDto } from "./foreignNames.interface.dto";
import { ProductClassDto } from "./productClass.interface.dto";
import { ThumbnailDto } from "./thumbnail.interface.dto";
import { ImagesDto } from "./images.interface.dto";
import { LogisticsDataDto } from "./logisticsData.interface.dto";
import { CustomAttributesDto } from "./customAttributes.interface.dto";


export class ProductsDto {
  id: string;
  productCode: string;
  productName: string;

  @ValidateNested({ each: true })
  @Type(() => ForeignNamesDto)
  foreignNames: ForeignNamesDto[];

  productClass: ProductClassDto;
  active: boolean;

  @ValidateNested()
  @Type(() => ThumbnailDto)
  thumbnail: ThumbnailDto;

  @ValidateNested({ each: true })
  @Type(() => ImagesDto)
  images: ImagesDto[];

  unit: string;
  eANCode: string;
  eANPackageCode: string;

  @ValidateNested({ each: true })
  @Type(() => LogisticsDataDto)
  logisticData: LogisticsDataDto[];

  tags: string[];

  @ValidateNested({ each: true })
  @Type(() => CustomAttributesDto)
  customAttributes: CustomAttributesDto[];

  likes: number;
  description: string;
}